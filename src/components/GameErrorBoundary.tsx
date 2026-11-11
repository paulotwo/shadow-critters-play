import React from "react";
import { stopBackgroundMusic, stopSpeech } from "./gameAudio";

const MAX_RESTARTS = 5;
const WINDOW_MS = 30000;

interface State {
  /** Muda a cada erro: remonta o jogo do zero, de volta à tela inicial. */
  generation: number;
  /** true entre o erro e a remontagem: a árvore quebrada não é desenhada de novo. */
  failed: boolean;
  /** true quando o jogo quebra repetidamente e remontar não resolve. */
  gaveUp: boolean;
}

/**
 * Última linha de defesa: sem isto, um erro de renderização desmonta o app
 * inteiro e a criança fica olhando para uma tela em branco. Aqui o jogo
 * recomeça sozinho na tela inicial; só se o erro se repetir várias vezes em
 * poucos segundos aparece um botão para recarregar.
 */
class GameErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  state: State = { generation: 0, failed: false, gaveUp: false };
  private recent: number[] = [];

  static getDerivedStateFromError(): Partial<State> {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Jogo reiniciado após erro:", error);
    stopBackgroundMusic();
    stopSpeech();
    const now = Date.now();
    this.recent = [...this.recent.filter((time) => now - time < WINDOW_MS), now];
    this.setState((s) => ({
      generation: s.generation + 1,
      failed: false,
      gaveUp: this.recent.length > MAX_RESTARTS,
    }));
  }

  render() {
    if (this.state.gaveUp) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4">
          <span className="text-7xl">🙈</span>
          <button
            onClick={() => window.location.reload()}
            className="rounded-full bg-primary px-10 py-4 text-3xl font-bold text-primary-foreground shadow-lg active:scale-95"
          >
            🔄
          </button>
        </div>
      );
    }
    if (this.state.failed) return null;
    return <React.Fragment key={this.state.generation}>{this.props.children}</React.Fragment>;
  }
}

export default GameErrorBoundary;
