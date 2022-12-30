import React from "react";

import { Container, Title } from "../../components";
import { Avatar } from "../../components/Avatar";
import { useOfflineGame } from "../../hooks";
import { Board, EndGameModal } from "./components";
import { Content } from "./styles";

export const Game: React.FC = () => {
  const { game, updateBoardAndTurn, handleRestartGame } = useOfflineGame();

  return (
    <Container>
      <Title padding="0 0 40px 0">Jogo da Velha</Title>

      <Content>
        <Avatar symbol="x" isMyTurn={game.turn === "x"} />
        <Board onClick={updateBoardAndTurn} board={game.board} />
        <Avatar symbol="o" isMyTurn={game.turn === "o"} isSecondPlayer />
      </Content>

      <EndGameModal
        title={
          game.hasWinner ? `O Jogador "${game.hasWinner}" venceu` : "Deu velha"
        }
        isOpen={!!game.isGameOver || !!game.hasWinner}
        onClose={handleRestartGame}
      />
    </Container>
  );
};
