import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

export type GameState = {
  money: number;
  blocks: number;
};

const initialGameState: GameState = {
  money: 0,
  blocks: 1,
};

export type GameStateStore = {
  state: GameState;
  setState: Dispatch<SetStateAction<GameState>>;
};

export const GameContext = createContext<GameStateStore | null>(null);

const GameStateProvider: FC = ({ children }) => {
  const [state, setState] = useState<GameState>(initialGameState);
  return <GameContext.Provider value={{ state, setState }}>{children}</GameContext.Provider>;
};

export default GameStateProvider;
