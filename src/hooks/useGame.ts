import { BoardProps, GameProps, PlaceOptions } from "../interfaces";
import { hasWinnerValidation, isGameOverValidation } from "../validations";

export interface UseGameProps {
  game: GameProps;
  setGame: (game: GameProps) => void;
}

export const useGame = ({ game, setGame }: UseGameProps) => {
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

    game.board[index[place]] = game.turn;

    const hasWinner = hasWinnerValidation({
      board: game.board,
      symbol: game.turn,
    });

    const isGameOver = isGameOverValidation({ board: game.board });

    setGame({
      ...game,
      board: game.board,
      turn: game.turn === "x" ? "o" : "x",
      hasWinner: hasWinner ? game.turn : "",
      isGameOver,
    });
  };

  const handleRestartGame = () => {
    const defaultBoard: BoardProps = ["", "", "", "", "", "", "", "", ""];

    setGame({
      ...game,
      board: defaultBoard,
      hasWinner: "",
      isGameOver: false,
    });
  };

  return { game, updateBoardAndTurn, handleRestartGame };
};
