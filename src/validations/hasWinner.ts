import { BoardProps, GameSymbols } from "../interfaces";

export interface ValidateEndGameProps {
  board: BoardProps;
  symbol: GameSymbols;
}

export const hasWinnerValidation = ({
  board,
  symbol,
}: ValidateEndGameProps): boolean => {
  const winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const i in winningSequences) {
    if (
      board[winningSequences[i][0]] == symbol &&
      board[winningSequences[i][1]] == symbol &&
      board[winningSequences[i][2]] == symbol
    ) {
      return true;
    }
  }

  return false;
};
