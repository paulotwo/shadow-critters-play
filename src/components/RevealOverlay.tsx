import React, { useState, useEffect, useCallback, useRef } from "react";

const GRID_COLS = 4;
const GRID_ROWS = 4;
const TOTAL_TILES = GRID_COLS * GRID_ROWS;
const REVEAL_INTERVAL = 1500; // ms between each tile reveal

const TILE_COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--game-correct))",
  "hsl(var(--game-sun))",
  "hsl(var(--game-sky))",
  "hsl(var(--accent))",
  "hsl(var(--secondary))",
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface RevealOverlayProps {
  /** Unique key to reset the overlay (e.g. round id) */
  roundKey: string;
  /** Whether the game is paused (feedback showing) */
  paused: boolean;
  /** Called with the number of tiles still hidden when guess happens */
  onRevealCount?: (hiddenCount: number) => void;
}

const RevealOverlay: React.FC<RevealOverlayProps> = ({ roundKey, paused }) => {
  const [hiddenTiles, setHiddenTiles] = useState<Set<number>>(() => {
    return new Set(Array.from({ length: TOTAL_TILES }, (_, i) => i));
  });
  const [tileColors, setTileColors] = useState<string[]>([]);
  const [revealOrder, setRevealOrder] = useState<number[]>([]);
  const revealIndexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Reset on new round
  useEffect(() => {
    const allTiles = Array.from({ length: TOTAL_TILES }, (_, i) => i);
    setHiddenTiles(new Set(allTiles));
    const colors = allTiles.map((_, i) => TILE_COLORS[i % TILE_COLORS.length]);
    setTileColors(shuffleArray(colors));
    setRevealOrder(shuffleArray(allTiles));
    revealIndexRef.current = 0;
  }, [roundKey]);

  // Progressive reveal timer
  useEffect(() => {
    if (paused) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      const idx = revealIndexRef.current;
      if (idx >= revealOrder.length) {
        if (timerRef.current) clearInterval(timerRef.current);
        return;
      }
      const tileToReveal = revealOrder[idx];
      revealIndexRef.current = idx + 1;
      setHiddenTiles((prev) => {
        const next = new Set(prev);
        next.delete(tileToReveal);
        return next;
      });
    }, REVEAL_INTERVAL);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [paused, revealOrder]);

  return (
    <div
      className="absolute inset-0 grid pointer-events-none z-10"
      style={{
        gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
        borderRadius: "inherit",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: TOTAL_TILES }, (_, i) => {
        const isHidden = hiddenTiles.has(i);
        return (
          <div
            key={i}
            className="transition-all duration-500 ease-out"
            style={{
              backgroundColor: isHidden ? tileColors[i] || TILE_COLORS[0] : "transparent",
              opacity: isHidden ? 1 : 0,
              transform: isHidden ? "scale(1)" : "scale(0.5) rotateY(90deg)",
            }}
          />
        );
      })}
    </div>
  );
};

export default RevealOverlay;
export { TOTAL_TILES };
