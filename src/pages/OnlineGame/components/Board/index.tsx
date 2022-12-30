import React from "react";

import { GameSymbols, PlaceOptions } from "../../../../interfaces";
import { BoardContainer, Square } from "./styles";

export interface BoardProps {
  onClick: (place: PlaceOptions) => void;
  board: GameSymbols[];
  isMyTurn: boolean;
}

export const Board: React.FC<BoardProps> = ({ onClick, board, isMyTurn }) => {
  return (
    <BoardContainer>
      <Square
        className="material-icons"
        place="one"
        onClick={() => onClick("one")}
        symbol={board[0]}
        disabled={!!board[0] || !isMyTurn}
        title={
          !isMyTurn ? "Não é seu turno, espere o adversário jogar!" : undefined
        }
      />
      <Square
        className="material-icons"
        place="two"
        onClick={() => onClick("two")}
        symbol={board[1]}
        disabled={!!board[1] || !isMyTurn}
        title={
          !isMyTurn ? "Não é seu turno, espere o adversário jogar!" : undefined
        }
      />
      <Square
        className="material-icons"
        place="three"
        onClick={() => onClick("three")}
        symbol={board[2]}
        disabled={!!board[2] || !isMyTurn}
        title={
          !isMyTurn ? "Não é seu turno, espere o adversário jogar!" : undefined
        }
      />
      <Square
        className="material-icons"
        place="four"
        onClick={() => onClick("four")}
        symbol={board[3]}
        disabled={!!board[3] || !isMyTurn}
        title={
          !isMyTurn ? "Não é seu turno, espere o adversário jogar!" : undefined
        }
      />
      <Square
        className="material-icons"
        place="five"
        onClick={() => onClick("five")}
        symbol={board[4]}
        disabled={!!board[4] || !isMyTurn}
        title={
          !isMyTurn ? "Não é seu turno, espere o adversário jogar!" : undefined
        }
      />
      <Square
        className="material-icons"
        place="six"
        onClick={() => onClick("six")}
        symbol={board[5]}
        disabled={!!board[5] || !isMyTurn}
        title={
          !isMyTurn ? "Não é seu turno, espere o adversário jogar!" : undefined
        }
      />
      <Square
        className="material-icons"
        place="seven"
        onClick={() => onClick("seven")}
        symbol={board[6]}
        disabled={!!board[6] || !isMyTurn}
        title={
          !isMyTurn ? "Não é seu turno, espere o adversário jogar!" : undefined
        }
      />
      <Square
        className="material-icons"
        place="eigth"
        onClick={() => onClick("eigth")}
        symbol={board[7]}
        disabled={!!board[7] || !isMyTurn}
        title={
          !isMyTurn ? "Não é seu turno, espere o adversário jogar!" : undefined
        }
      />
      <Square
        className="material-icons"
        place="nine"
        onClick={() => onClick("nine")}
        symbol={board[8]}
        disabled={!!board[8] || !isMyTurn}
        title={
          !isMyTurn ? "Não é seu turno, espere o adversário jogar!" : undefined
        }
      />
    </BoardContainer>
  );
};
