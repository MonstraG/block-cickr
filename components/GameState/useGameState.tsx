import { useContext } from "react";
import { GameContext, GameStateStore } from "./GameStateContext";

const useGameState = (): GameStateStore => {
  const context = useContext(GameContext);
  if (context == null) {
    throw new Error("useGameState must be used within a GameStateProvider");
  }
  return context;
};

export default useGameState;
