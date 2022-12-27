import { useEffect, useState } from "react";
import {
  BoardProps,
  GameSymbols,
  GameProps,
  PlaceOptions,
} from "../interfaces";
import { hasWinnerValidation, isGameOverValidation } from "../validations";

export const useGame = () => {
  const defaultGame: GameProps = {
    board: ["", "", "", "", "", "", "", "", ""],
    turn: "x",
  };

  const [game, setGame] = useState<GameProps>(defaultGame);
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
    setBoard(defaultGame.board);
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
