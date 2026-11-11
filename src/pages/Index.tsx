import GameErrorBoundary from "@/components/GameErrorBoundary";
import ShadowGame from "@/components/ShadowGame";

const Index = () => (
  <GameErrorBoundary>
    <ShadowGame />
  </GameErrorBoundary>
);

export default Index;
