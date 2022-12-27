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
