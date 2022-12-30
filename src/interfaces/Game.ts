import { UserProps } from "../contexts";

export type PlaceOptions =
  | "one"
  | "two"
  | "three"
  | "four"
  | "five"
  | "six"
  | "seven"
  | "eigth"
  | "nine";

export type GameSymbols = "x" | "o" | "";

export interface GameProps {
  board: GameSymbols[];
  turn: GameSymbols;
  hasWinner?: GameSymbols;
  isGameOver?: boolean;
}

export type BoardProps = GameSymbols[];

export interface GameUserProps extends UserProps {
  symbol: GameSymbols;
}

export interface OnlineGameProps extends GameProps {
  firstPlayer?: GameUserProps;
  secondPlayer?: GameUserProps;
}
