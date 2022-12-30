import { useEffect, useState } from "react";

import {
  BoardProps,
  GameSymbols,
  GameProps,
  PlaceOptions,
} from "../interfaces";
import { hasWinnerValidation, isGameOverValidation } from "../validations";

export interface UseGameProps {
  game: GameProps;
  setGame: (game: GameProps) => void;
}

export const useGame = ({ game, setGame }: UseGameProps) => {
  const [board, setBoard] = useState<BoardProps>(game.board);
  const [turn, setTurn] = useState<GameSymbols>("x");

  const updateBoardAndTurn = (place: PlaceOptions) => {
    const index = {
      one: 0,
      two: 1,
      three: 2,
      four: 3,
      five: 4,
      six: 5,
      seven: 6,
      eigth: 7,
      nine: 8,
    };

    board[index[place]] = turn;

    setBoard(board);
    setTurn((state) => (state === "x" ? "o" : "x"));
  };

  const handleRestartGame = () => {
    const defaultBoard: BoardProps = ["", "", "", "", "", "", "", "", ""];

    setBoard(defaultBoard);
    setTurn(game.turn);
  };

  useEffect(() => {
    const previousTurn = turn === "x" ? "o" : "x";

    const hasWinner = hasWinnerValidation({
      board: board,
      symbol: previousTurn,
    });

    const isGameOver = isGameOverValidation({ board: board });

    setGame({
      board: board,
      turn: turn,
      hasWinner: hasWinner ? previousTurn : undefined,
      isGameOver,
    });
  }, [board, turn]);

  return { game, updateBoardAndTurn, handleRestartGame };
};
