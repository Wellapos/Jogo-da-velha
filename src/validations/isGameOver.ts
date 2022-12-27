import { BoardProps } from "../interfaces";

export interface IsGameOverProps {
  board: BoardProps;
}

export const isGameOverValidation = ({ board }: IsGameOverProps): boolean => {
  return !board.includes("");
};
