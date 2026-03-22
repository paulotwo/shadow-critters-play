import React, { useState, useCallback, useEffect, useMemo, useRef } from "react";
import {
  animalComponents,
  animalNames,
  animalEmojis,
  type AnimalId,
} from "./animals";
import {
  dinoComponents,
  dinoNames,
  dinoEmojis,
  type DinoId,
} from "./dinosaurs";
import { getRandomFunFact } from "./animalFunFacts";
import { getRandomDinoFunFact } from "./dinoFunFacts";
import { playCorrectSound, playWrongSound, speakText, enterFullscreen } from "./gameAudio";

type GameMode = "animals" | "dinos";
type CreatureId = AnimalId | DinoId;

const ALL_ANIMALS: AnimalId[] = [
  "cat", "dog", "elephant", "rabbit", "bird", "fish",
  "lion", "turtle", "butterfly", "frog", "horse", "owl",
  "penguin", "monkey", "giraffe", "bear", "dolphin", "snake", "bee", "pig",
];

const ALL_DINOS: DinoId[] = [
  "trex", "triceratops", "stegosaurus", "brachiosaurus", "velociraptor",
  "pteranodon", "ankylosaurus", "spinosaurus", "parasaurolophus", "diplodocus",
  "pachycephalosaurus", "iguanodon", "compsognathus", "carnotaurus", "dilophosaurus",
  "apatosaurus", "plesiosaurus", "mosasaurus", "dimetrodon", "archaeopteryx",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRound<T>(pool: T[]): { shadow: T; options: T[] } {
  const shuffled = shuffle(pool);
  const shadow = shuffled[0];
  const distractors = shuffled.slice(1, 3);
  const options = shuffle([shadow, ...distractors]);
  return { shadow, options };
}

function getComponents(mode: GameMode) {
  return mode === "animals" ? animalComponents : dinoComponents;
}
function getNames(mode: GameMode) {
  return mode === "animals" ? animalNames : dinoNames;
}
function getEmojis(mode: GameMode) {
  return mode === "animals" ? animalEmojis : dinoEmojis;
}
function getPool(mode: GameMode): CreatureId[] {
  return mode === "animals" ? ALL_ANIMALS : ALL_DINOS;
}
function getFunFact(mode: GameMode, id: CreatureId): string {
  return mode === "animals"
    ? getRandomFunFact(id as AnimalId)
    : getRandomDinoFunFact(id as DinoId);
}

const ShadowGame: React.FC = () => {
  const [mode, setMode] = useState<GameMode>("animals");
  const [round, setRound] = useState(() => pickRound(getPool("animals")));
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [funFact, setFunFact] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<CreatureId | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [hintId, setHintId] = useState<CreatureId | null>(null);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const components = getComponents(mode);
  const names = getNames(mode);
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

  const nextRound = useCallback(() => {
    clearHintTimer();
    setFeedback(null);
    setFunFact(null);
    setSelectedId(null);
    setHintId(null);
    setRound(pickRound(getPool(mode)));
  }, [clearHintTimer, mode]);

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
      if (feedback) return;
      clearHintTimer();
      setHintId(null);
      setSelectedId(id);
      setTotal((t) => t + 1);
      if (id === round.shadow) {
        setFeedback("correct");
        setScore((s) => s + 1);
        const fact = getFunFact(mode, round.shadow);
        setFunFact(fact);
        playCorrectSound();
        setTimeout(async () => {
          await speakText(`${(names as Record<string, string>)[round.shadow as string]}! ${fact}`);
          setTimeout(nextRound, 600);
        }, 300);
      } else {
        setFeedback("wrong");
        playWrongSound();
        setTimeout(nextRound, 1200);
      }
    },
    [feedback, round.shadow, nextRound, clearHintTimer, mode, names]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (showIntro && (e.key === "Enter" || e.key === " ")) {
        setShowIntro(false);
        enterFullscreen();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showIntro]);

  const handleStartGame = (selectedMode: GameMode) => {
    setMode(selectedMode);
    setScore(0);
    setTotal(0);
    setRound(pickRound(getPool(selectedMode)));
    setShowIntro(false);
    enterFullscreen();
  };

  if (showIntro) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
        <div className="animate-bounce-in text-center">
          <h1 className="mb-2 text-5xl font-bold text-primary md:text-6xl" style={{ lineHeight: 1.1 }}>
            🌙 Jogo de Sombras
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Descubra qual animal está escondido na sombra!
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-2 max-w-sm">
            {ALL_ANIMALS.slice(0, 4).map((id, i) => {
              const A = animalComponents[id];
              return (
                <div key={id} className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                  <A className="h-10 w-10 md:h-12 md:w-12" />
                </div>
              );
            })}
            {ALL_DINOS.slice(0, 4).map((id, i) => {
              const D = dinoComponents[id];
              return (
                <div key={id} className="animate-float" style={{ animationDelay: `${(i + 4) * 0.2}s` }}>
                  <D className="h-10 w-10 md:h-12 md:w-12" />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 items-center">
            <button
              onClick={() => handleStartGame("animals")}
              className="w-56 rounded-full bg-primary px-10 py-4 text-xl font-bold text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              🐾 Animais
            </button>
            <button
              onClick={() => handleStartGame("dinos")}
              className="w-56 rounded-full bg-game-correct px-10 py-4 text-xl font-bold text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              🦖 Dinossauros
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-4 py-6">
      {/* Header */}
      <div className="mb-6 flex w-full max-w-lg items-center justify-between">
        <button
          onClick={() => {
            setShowIntro(true);
            setScore(0);
            setTotal(0);
          }}
          className="rounded-lg bg-muted px-4 py-2 text-sm font-semibold text-muted-foreground transition-transform active:scale-95"
        >
          ← Início
        </button>
        <div className="flex items-center gap-2 rounded-full bg-card px-5 py-2 shadow">
          <span className="text-lg">{mode === "animals" ? "🐾" : "🦖"}</span>
          <span className="text-xl font-bold text-foreground tabular-nums">
            {score}/{total}
          </span>
        </div>
      </div>

      {/* Shadow display */}
      <div className="mb-2 text-center text-lg font-semibold text-muted-foreground">
        {mode === "animals" ? "Qual é este animal?" : "Qual é este dinossauro?"}
      </div>
      <div
        className={`relative mb-8 flex items-center justify-center rounded-3xl bg-card p-8 shadow-xl transition-all duration-300 ${
          feedback === "correct"
            ? "animate-pop-correct ring-4 ring-game-correct"
            : feedback === "wrong"
            ? "animate-shake-wrong ring-4 ring-game-wrong"
            : ""
        }`}
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
            ? `Isso! É o ${(names as Record<string, string>)[round.shadow as string]}! ${(emojis as Record<string, string>)[round.shadow as string]}`
            : `Ops! Era o ${(names as Record<string, string>)[round.shadow as string]}! ${(emojis as Record<string, string>)[round.shadow as string]}`}
          {feedback === "correct" && funFact && (
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              💡 {funFact}
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
                {(names as Record<string, string>)[id as string]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShadowGame;
