import React, { useState, useCallback, useEffect, useMemo, useRef } from "react";
import {
  animalComponents,
  animalEmojis,
  type AnimalId,
} from "./animals";
import {
  dinoComponents,
  dinoEmojis,
  type DinoId,
} from "./dinosaurs";
import {
  aquaticComponents,
  aquaticEmojis,
  type AquaticId,
} from "./aquatics";
import { getRandomFunFact } from "./animalFunFacts";
import { getRandomDinoFunFact } from "./dinoFunFacts";
import { getRandomAquaticFunFact } from "./aquaticFunFacts";
import { playCorrectSound, playWrongSound, speakText, prewarmSpeech, enterFullscreen, setAudioActive, startBackgroundMusic, stopBackgroundMusic, stopSpeech, switchMelody } from "./gameAudio";
import { App as CapacitorApp } from "@capacitor/app";
import { Share } from "@capacitor/share";
import { isNative } from "@/lib/platform";
import { useI18n } from "@/i18n";
import type { Locale } from "@/i18n/translations";
import LanguageSelector from "./LanguageSelector";
import { Share2 } from "lucide-react";

type GameMode = "animals" | "dinos" | "aquatics";
type CreatureId = AnimalId | DinoId | AquaticId;

const ALL_ANIMALS: AnimalId[] = [
  "cat", "dog", "elephant", "rabbit", "bird",
  "lion", "turtle", "butterfly", "frog", "horse", "owl",
  "penguin", "monkey", "giraffe", "bear", "snake", "bee", "pig",
  "panda", "koala", "zebra", "crocodile", "fox", "duck", "tiger",
];

const ALL_DINOS: DinoId[] = [
  "trex", "triceratops", "stegosaurus", "brachiosaurus", "velociraptor",
  "pteranodon", "ankylosaurus", "spinosaurus", "parasaurolophus", "diplodocus",
  "pachycephalosaurus", "iguanodon", "compsognathus", "carnotaurus", "dilophosaurus",
  "apatosaurus", "plesiosaurus", "mosasaurus", "dimetrodon", "archaeopteryx",
];

const ALL_AQUATICS: AquaticId[] = [
  "whale", "dolphin", "shark", "octopus", "fish",
  "seahorse", "jellyfish", "stingray", "seal", "crab",
  "lobster", "starfish", "narwhal", "orca", "clownfish",
  "squid", "walrus", "sea_turtle", "swordfish", "manatee",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Uma rodada carrega a própria categoria. Tudo o que a tela mostra sai daqui,
 * então nunca existe uma criatura de uma categoria sendo procurada na lista
 * de outra (era isso que derrubava o app ao trocar de jogo no meio da fala).
 */
interface Round {
  mode: GameMode;
  shadow: CreatureId;
  options: CreatureId[];
}

function pickRound(mode: GameMode, recentList: CreatureId[]): Round {
  const pool = getPool(mode);
  const available = pool.filter((x) => !recentList.includes(x));
  const candidates = available.length >= 3 ? available : pool;
  const shuffled = shuffle(candidates);
  const shadow = shuffled[0];
  const others = shuffle(pool.filter((x) => x !== shadow));
  const distractors = others.slice(0, 2);
  const options = shuffle([shadow, ...distractors]);
  return { mode, shadow, options };
}

function getComponents(mode: GameMode) {
  if (mode === "animals") return animalComponents;
  if (mode === "dinos") return dinoComponents;
  return aquaticComponents;
}
function getEmojis(mode: GameMode) {
  if (mode === "animals") return animalEmojis;
  if (mode === "dinos") return dinoEmojis;
  return aquaticEmojis;
}
function getPool(mode: GameMode): CreatureId[] {
  if (mode === "animals") return ALL_ANIMALS;
  if (mode === "dinos") return ALL_DINOS;
  return ALL_AQUATICS;
}
function getFunFact(mode: GameMode, id: CreatureId, locale: Locale): string {
  if (mode === "animals") return getRandomFunFact(id as AnimalId, locale);
  if (mode === "dinos") return getRandomDinoFunFact(id as DinoId, locale);
  return getRandomAquaticFunFact(id as AquaticId, locale);
}
function getCreatureName(mode: GameMode, id: CreatureId, t: ReturnType<typeof useI18n>["t"]): string {
  if (mode === "animals") return t.animalNames[id as AnimalId];
  if (mode === "dinos") return t.dinoNames[id as DinoId];
  return t.aquaticNames[id as AquaticId];
}
function getQuestion(mode: GameMode, t: ReturnType<typeof useI18n>["t"]): string {
  if (mode === "animals") return t.ui.questionAnimal;
  if (mode === "dinos") return t.ui.questionDino;
  return t.ui.questionAquatic;
}
function getModeEmoji(mode: GameMode): string {
  if (mode === "animals") return "🐾";
  if (mode === "dinos") return "🦖";
  return "🐠";
}

const ShadowGame: React.FC = () => {
  const { locale, t, speechLang } = useI18n();
  const recentShadowsRef = useRef<CreatureId[]>([]);
  const [round, setRound] = useState<Round>(() => pickRound("animals", []));
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [funFact, setFunFact] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<CreatureId | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [hintId, setHintId] = useState<CreatureId | null>(null);
  const [musicOn, setMusicOn] = useState(true);
  const [funFactsOn, setFunFactsOn] = useState(true);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ---- Controle do fluxo de uma rodada ----
  // Uma resposta dispara som, fala e a troca de rodada, em etapas com espera.
  // Se a criança sai do jogo ou começa outro no meio, `cancelFlow()` invalida
  // tudo o que ainda estava para acontecer: nenhuma etapa antiga mexe na tela
  // nova. `busyRef` trava a rodada no primeiro toque, antes de o React
  // redesenhar (o estado `feedback` chega tarde para toques em rajada).
  const flowRef = useRef(0);
  const timersRef = useRef(new Set<ReturnType<typeof setTimeout>>());
  const busyRef = useRef(false);
  const scoreRef = useRef(0);

  const mode = round.mode;
  const components = getComponents(mode);
  const emojis = getEmojis(mode);

  const ShadowCreature = useMemo(
    () => (components as Record<string, React.FC<any>>)[round.shadow as string],
    [round.shadow, components]
  );

  const clearHintTimer = useCallback(() => {
    if (hintTimerRef.current) {
      clearTimeout(hintTimerRef.current);
      hintTimerRef.current = null;
    }
  }, []);

  const cancelFlow = useCallback(() => {
    flowRef.current++;
    timersRef.current.forEach(clearTimeout);
    timersRef.current.clear();
    busyRef.current = false;
  }, []);

  /** setTimeout que só dispara se o fluxo em que nasceu ainda for o atual. */
  const later = useCallback((fn: () => void, ms: number) => {
    const flow = flowRef.current;
    const id = setTimeout(() => {
      timersRef.current.delete(id);
      if (flow === flowRef.current) fn();
    }, ms);
    timersRef.current.add(id);
  }, []);

  const resetRoundUi = useCallback(() => {
    clearHintTimer();
    setFeedback(null);
    setFunFact(null);
    setSelectedId(null);
    setHintId(null);
  }, [clearHintTimer]);

  const nextRound = useCallback(() => {
    resetRoundUi();
    busyRef.current = false;
    setRound((prev) => {
      recentShadowsRef.current = [...recentShadowsRef.current, prev.shadow].slice(-15);
      return pickRound(prev.mode, recentShadowsRef.current);
    });
  }, [resetRoundUi]);

  useEffect(() => {
    if (feedback || showIntro) return;
    clearHintTimer();
    hintTimerRef.current = setTimeout(() => {
      setHintId(round.shadow);
      setTimeout(() => setHintId(null), 1200);
    }, 5000);
    return clearHintTimer;
  }, [round, feedback, showIntro, clearHintTimer]);

  const handleGuess = useCallback(
    (id: CreatureId) => {
      if (busyRef.current || showIntro) return;
      busyRef.current = true;
      clearHintTimer();
      setHintId(null);
      setSelectedId(id);
      setTotal((n) => n + 1);
      if (id === round.shadow) {
        setFeedback("correct");
        scoreRef.current += 1;
        setScore(scoreRef.current);
        if (scoreRef.current % 3 === 0) switchMelody();
        const fact = funFactsOn ? getFunFact(mode, round.shadow, locale) : null;
        setFunFact(fact);
        playCorrectSound();
        const name = getCreatureName(mode, round.shadow, t);
        const speechText = fact ? `${name}! ${fact}` : `${name}!`;
        const flow = flowRef.current;
        later(() => {
          speakText(speechText, speechLang).then(() => {
            if (flow === flowRef.current) later(nextRound, 600);
          });
        }, 300);
      } else {
        setFeedback("wrong");
        playWrongSound();
        later(nextRound, 1200);
      }
    },
    [showIntro, round.shadow, nextRound, later, clearHintTimer, mode, locale, t, speechLang, funFactsOn]
  );

  useEffect(() => {
    if (showIntro) prewarmSpeech();
  }, [showIntro]);

  const handleStartGame = useCallback(
    (selectedMode: GameMode) => {
      cancelFlow();
      resetRoundUi();
      scoreRef.current = 0;
      setScore(0);
      setTotal(0);
      recentShadowsRef.current = [];
      setRound(pickRound(selectedMode, []));
      setShowIntro(false);
      enterFullscreen();
      if (musicOn) startBackgroundMusic();
      speakText(getQuestion(selectedMode, t), speechLang);
    },
    [cancelFlow, resetRoundUi, musicOn, t, speechLang]
  );

  const goHome = useCallback(() => {
    cancelFlow();
    resetRoundUi();
    stopBackgroundMusic();
    stopSpeech();
    scoreRef.current = 0;
    setShowIntro(true);
    setScore(0);
    setTotal(0);
  }, [cancelFlow, resetRoundUi]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (showIntro && (e.key === "Enter" || e.key === " ")) handleStartGame(mode);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showIntro, handleStartGame, mode]);

  // Sair da tela (app em segundo plano, aba escondida) silencia tudo; voltar
  // retoma a música se o jogo estava em andamento com ela ligada.
  useEffect(() => {
    const onActiveChange = (isActive: boolean) => {
      if (!isActive) {
        stopBackgroundMusic();
        stopSpeech();
        setAudioActive(false);
      } else {
        setAudioActive(true);
        if (!showIntro && musicOn) startBackgroundMusic();
      }
    };
    if (isNative) {
      const state = CapacitorApp.addListener("appStateChange", ({ isActive }) => onActiveChange(isActive));
      return () => {
        state.then((h) => h.remove());
      };
    }
    const onVisibility = () => onActiveChange(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [showIntro, musicOn]);

  // App nativo: botão voltar do Android (jogo → início → sai do app).
  useEffect(() => {
    if (!isNative) return;
    const back = CapacitorApp.addListener("backButton", () => {
      if (showIntro) CapacitorApp.exitApp();
      else goHome();
    });
    return () => {
      back.then((h) => h.remove());
    };
  }, [showIntro, goHome]);

  // Ao desmontar (inclusive pela recuperação de erro), nada fica tocando.
  useEffect(
    () => () => {
      cancelFlow();
      stopBackgroundMusic();
      stopSpeech();
    },
    [cancelFlow]
  );

  const handleShare = async () => {
    const shareData = {
      title: t.ui.gameTitle.replace(/[^\w\s]/g, "").trim(),
      text: t.ui.shareText,
      url: window.location.href,
    };
    if (isNative) {
      // O WebView não tem `navigator.share` e a URL dele é https://localhost.
      try {
        await Share.share({ ...shareData, url: "https://shadow-critters-play.ksepisteme.com.br/" });
      } catch { /* user cancelled */ }
    } else if (navigator.share) {
      try { await navigator.share(shareData); } catch { /* user cancelled */ }
    } else {
      await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
    }
  };

  const langButton = <LanguageSelector />;

  if (showIntro) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
        <div className="absolute right-4 top-[calc(1rem+env(safe-area-inset-top))] flex items-center gap-2">
          <button
            onClick={handleShare}
            className="rounded-xl bg-card/80 backdrop-blur px-3 py-2 text-lg transition-transform hover:scale-105 active:scale-95 shadow"
            title={t.ui.shareButton}
          >
            <Share2 size={20} className="text-foreground" />
          </button>
          {langButton}
        </div>
        <div className="animate-bounce-in text-center">
          <h1 className="mb-2 text-5xl font-bold text-primary md:text-6xl" style={{ lineHeight: 1.1 }}>
            {t.ui.gameTitle}
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            {t.ui.gameSubtitle}
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-2 max-w-sm">
            {ALL_ANIMALS.slice(0, 3).map((id, i) => {
              const A = animalComponents[id];
              return (
                <div key={id} className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                  <A className="h-10 w-10 md:h-12 md:w-12" />
                </div>
              );
            })}
            {ALL_DINOS.slice(0, 3).map((id, i) => {
              const D = dinoComponents[id];
              return (
                <div key={id} className="animate-float" style={{ animationDelay: `${(i + 3) * 0.2}s` }}>
                  <D className="h-10 w-10 md:h-12 md:w-12" />
                </div>
              );
            })}
            {ALL_AQUATICS.slice(0, 3).map((id, i) => {
              const Q = aquaticComponents[id];
              return (
                <div key={id} className="animate-float" style={{ animationDelay: `${(i + 6) * 0.2}s` }}>
                  <Q className="h-10 w-10 md:h-12 md:w-12" />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 items-center">
            <button
              data-testid="mode-animals"
              onClick={() => handleStartGame("animals")}
              className="w-56 rounded-full bg-primary px-10 py-4 text-xl font-bold text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              {t.ui.animalsButton}
            </button>
            <button
              data-testid="mode-aquatics"
              onClick={() => handleStartGame("aquatics")}
              className="w-56 rounded-full bg-[hsl(200,80%,50%)] px-10 py-4 text-xl font-bold text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              {t.ui.aquaticsButton}
            </button>
            <button
              data-testid="mode-dinos"
              onClick={() => handleStartGame("dinos")}
              className="w-56 rounded-full bg-game-correct px-10 py-4 text-xl font-bold text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              {t.ui.dinosButton}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const shadowName = getCreatureName(mode, round.shadow, t);
  const shadowEmoji = (emojis as Record<string, string>)[round.shadow as string];

  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-[calc(1.5rem+env(safe-area-inset-top))]">
      {/* Header */}
      <div className="mb-6 flex w-full max-w-lg items-center justify-between">
        <button
          data-testid="home"
          onClick={goHome}
          className="rounded-lg bg-muted px-3 py-2 text-lg transition-transform active:scale-95"
          title={t.ui.backButton}
        >
          🏠
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (musicOn) {
                stopBackgroundMusic();
                setMusicOn(false);
              } else {
                startBackgroundMusic();
                setMusicOn(true);
              }
            }}
            className="rounded-lg bg-muted px-3 py-2 text-lg transition-transform active:scale-95"
            data-testid="music"
            title={musicOn ? "Mute" : "Unmute"}
          >
            {musicOn ? "🔊" : "🔇"}
          </button>
          <button
            onClick={() => setFunFactsOn((v) => !v)}
            className="rounded-lg bg-muted px-3 py-2 text-lg transition-transform active:scale-95"
            data-testid="facts"
            title={funFactsOn ? "Disable fun facts" : "Enable fun facts"}
          >
            {funFactsOn ? "💡" : "🚫"}
          </button>
          {langButton}
          <div className="flex items-center gap-2 rounded-full bg-card px-5 py-2 shadow">
            <span className="text-lg">{getModeEmoji(mode)}</span>
            <span data-testid="score" className="text-xl font-bold text-foreground tabular-nums">
              {score}/{total}
            </span>
          </div>
        </div>
      </div>

      {/* Shadow display */}
      <div className="mb-2 text-center text-lg font-semibold text-muted-foreground">
        {getQuestion(mode, t)}
      </div>
      <div
        className={`relative mb-8 flex items-center justify-center rounded-3xl bg-card p-8 shadow-xl transition-all duration-300 ${
          feedback === "correct"
            ? "animate-pop-correct ring-4 ring-game-correct"
            : feedback === "wrong"
            ? "animate-shake-wrong ring-4 ring-game-wrong"
            : ""
        }`}
        data-testid="shadow"
        style={{ width: 220, height: 220 }}
      >
        <ShadowCreature className="h-40 w-40" isShadow />

        {feedback === "correct" && (
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-game-correct/20">
            <span className="text-5xl">✅</span>
          </div>
        )}
        {feedback === "wrong" && (
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-game-wrong/20">
            <span className="text-5xl">❌</span>
          </div>
        )}
      </div>

      {/* Answer text */}
      {feedback && (
        <div
          className={`mb-4 animate-bounce-in text-center text-xl font-bold ${
            feedback === "correct" ? "text-game-correct" : "text-game-wrong"
          }`}
        >
          {feedback === "correct"
            ? `${t.ui.correctPrefix} ${shadowName}! ${shadowEmoji}`
            : `${t.ui.wrongPrefix} ${shadowName}! ${shadowEmoji}`}
          {feedback === "correct" && funFact && (
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {t.ui.funFactPrefix} {funFact}
            </p>
          )}
        </div>
      )}

      {/* Options */}
      <div className="grid w-full max-w-md grid-cols-3 gap-4">
        {round.options.map((id) => {
          const A = (components as Record<string, React.FC<any>>)[id as string];
          const isSelected = selectedId === id;
          const isCorrectChoice = feedback === "correct" && isSelected;
          const isWrongChoice = feedback === "wrong" && isSelected;
          const isHinted = hintId === id;

          return (
            <button
              key={id as string}
              data-testid="option"
              onClick={() => handleGuess(id)}
              disabled={!!feedback}
              className={`group flex flex-col items-center gap-2 rounded-2xl bg-card p-4 shadow-md transition-all duration-200 ${
                !feedback
                  ? "hover:scale-105 hover:shadow-lg active:scale-95"
                  : ""
              } ${
                isCorrectChoice
                  ? "ring-4 ring-game-correct scale-105"
                  : isWrongChoice
                  ? "ring-4 ring-game-wrong"
                  : feedback
                  ? "opacity-50"
                  : ""
              } ${
                isHinted
                  ? "ring-4 ring-primary/60 scale-105 shadow-lg animate-pulse"
                  : ""
              }`}
            >
              <A className="h-20 w-20 md:h-24 md:w-24" />
              <span className="text-sm font-semibold text-foreground md:text-base">
                {getCreatureName(mode, id, t)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShadowGame;
