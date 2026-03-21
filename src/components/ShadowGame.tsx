import React, { useState, useCallback, useEffect, useMemo } from "react";
import {
  animalComponents,
  animalNames,
  animalEmojis,
  type AnimalId,
} from "./AnimalSVGs";
import { getRandomFunFact } from "./animalFunFacts";
import { playCorrectSound, speakText } from "./gameAudio";

const ALL_ANIMALS: AnimalId[] = ["cat", "dog", "elephant", "rabbit", "bird", "fish"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRound(): { shadow: AnimalId; options: AnimalId[] } {
  const shuffled = shuffle(ALL_ANIMALS);
  const shadow = shuffled[0];
  const distractors = shuffled.slice(1, 3);
  const options = shuffle([shadow, ...distractors]);
  return { shadow, options };
}

const ShadowGame: React.FC = () => {
  const [round, setRound] = useState(pickRound);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [funFact, setFunFact] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<AnimalId | null>(null);
  const [showIntro, setShowIntro] = useState(true);

  const ShadowAnimal = useMemo(
    () => animalComponents[round.shadow],
    [round.shadow]
  );

  const nextRound = useCallback(() => {
    setFeedback(null);
    setFunFact(null);
    setSelectedId(null);
    setRound(pickRound());
  }, []);

  const handleGuess = useCallback(
    (id: AnimalId) => {
      if (feedback) return;
      setSelectedId(id);
      setTotal((t) => t + 1);
      if (id === round.shadow) {
        setFeedback("correct");
        setScore((s) => s + 1);
        const fact = getRandomFunFact(round.shadow);
        setFunFact(fact);
        playCorrectSound();
        // Speak animal name + fun fact after a brief pause
        setTimeout(() => {
          speakText(`${animalNames[round.shadow]}! ${fact}`);
        }, 300);
      } else {
        setFeedback("wrong");
      }
      const isCorrect = id === round.shadow;
      setTimeout(nextRound, isCorrect ? 4500 : 1200);
    },
    [feedback, round.shadow, nextRound]
  );

  // Keyboard accessibility
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (showIntro && (e.key === "Enter" || e.key === " ")) {
        setShowIntro(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showIntro]);

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
          <div className="mb-8 flex justify-center gap-3">
            {ALL_ANIMALS.map((id, i) => {
              const A = animalComponents[id];
              return (
                <div
                  key={id}
                  className="animate-float"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <A className="h-14 w-14 md:h-16 md:w-16" />
                </div>
              );
            })}
          </div>
          <button
            onClick={() => setShowIntro(false)}
            className="rounded-full bg-primary px-10 py-4 text-xl font-bold text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Jogar! 🎮
          </button>
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
          <span className="text-lg">⭐</span>
          <span className="text-xl font-bold text-foreground tabular-nums">
            {score}/{total}
          </span>
        </div>
      </div>

      {/* Shadow display */}
      <div className="mb-2 text-center text-lg font-semibold text-muted-foreground">
        Qual é este animal?
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
        <ShadowAnimal className="h-40 w-40" isShadow />

        {/* Feedback overlay */}
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
            ? `Isso! É o ${animalNames[round.shadow]}! ${animalEmojis[round.shadow]}`
            : `Ops! Era o ${animalNames[round.shadow]}! ${animalEmojis[round.shadow]}`}
        </div>
      )}

      {/* Options */}
      <div className="grid w-full max-w-md grid-cols-3 gap-4">
        {round.options.map((id) => {
          const A = animalComponents[id];
          const isSelected = selectedId === id;
          const isCorrectChoice = feedback === "correct" && isSelected;
          const isWrongChoice = feedback === "wrong" && isSelected;

          return (
            <button
              key={id}
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
              }`}
            >
              <A className="h-20 w-20 md:h-24 md:w-24" />
              <span className="text-sm font-semibold text-foreground md:text-base">
                {animalNames[id]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShadowGame;
