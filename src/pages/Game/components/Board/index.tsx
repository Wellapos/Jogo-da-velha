import React from "react";

import { GameSymbols, PlaceOptions } from "../../../../interfaces";
import { BoardContainer, Square } from "./styles";

export interface BoardProps {
  onClick: (place: PlaceOptions) => void;
  board: GameSymbols[];
}

export const Board: React.FC<BoardProps> = ({ onClick, board }) => {
  return (
    <BoardContainer>
      <Square
        className="material-icons"
        place="one"
        onClick={() => onClick("one")}
        symbol={board[0]}
        disabled={!!board[0]}
      />
      <Square
        className="material-icons"
        place="two"
        onClick={() => onClick("two")}
        symbol={board[1]}
        disabled={!!board[1]}
      />
      <Square
        className="material-icons"
        place="three"
        onClick={() => onClick("three")}
        symbol={board[2]}
        disabled={!!board[2]}
      />
      <Square
        className="material-icons"
        place="four"
        onClick={() => onClick("four")}
        symbol={board[3]}
        disabled={!!board[3]}
      />
      <Square
        className="material-icons"
        place="five"
        onClick={() => onClick("five")}
        symbol={board[4]}
        disabled={!!board[4]}
      />
      <Square
        className="material-icons"
        place="six"
        onClick={() => onClick("six")}
        symbol={board[5]}
        disabled={!!board[5]}
      />
      <Square
        className="material-icons"
        place="seven"
        onClick={() => onClick("seven")}
        symbol={board[6]}
        disabled={!!board[6]}
      />
      <Square
        className="material-icons"
        place="eigth"
        onClick={() => onClick("eigth")}
        symbol={board[7]}
        disabled={!!board[7]}
      />
      <Square
        className="material-icons"
        place="nine"
        onClick={() => onClick("nine")}
        symbol={board[8]}
        disabled={!!board[8]}
      />
    </BoardContainer>
  );
};
