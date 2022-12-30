import { useState } from "react";

import { GameProps } from "../interfaces";
import { useGame } from "./useGame";

export const useOfflineGame = () => {
  const defaultGame: GameProps = {
    board: ["", "", "", "", "", "", "", "", ""],
    turn: "x",
  };

  const [game, setGame] = useState<GameProps>(defaultGame);

  return useGame({ game, setGame });
};
