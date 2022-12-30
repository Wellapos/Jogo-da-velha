import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Container, Title } from "../../components";
import { useAuth, useOnlineGame } from "../../hooks";
import { errorToastOptions } from "../../utils";

import { Board, EndGameModal, UserDetails } from "./components";
import { Content } from "./styles";

export const OnlineGame: React.FC = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const { game, updateBoardAndTurn, handleRestartGame } = useOnlineGame(id);

  const mySymbol = user?.uid === game?.firstPlayer?.uid ? "x" : "o";

  const handleEndGameModalClick = () => {
    if (!user) {
      toast.error("Você precisa fazer login para jogar.", errorToastOptions);
      return;
    }

    if (user.uid !== game.firstPlayer?.uid) {
      toast.error(
        "Somente o primeiro jogador pode reiniciar a partida.",
        errorToastOptions
      );
      return;
    }

    handleRestartGame();
  };

  return (
    <Container>
      <Title fontSize={60} padding="0 0 32px 0">
        Jogo da Velha
      </Title>

      <Content>
        {!!game.firstPlayer && (
          <UserDetails
            {...game.firstPlayer}
            isMyTurn={game.turn === game.firstPlayer?.symbol}
          />
        )}

        <Board
          board={game.board}
          onClick={updateBoardAndTurn}
          isMyTurn={game.turn === mySymbol}
        />

        {!!game.secondPlayer && (
          <UserDetails
            {...game.secondPlayer}
            isMyTurn={game.turn === game.secondPlayer?.symbol}
          />
        )}
      </Content>

      <EndGameModal
        title={
          game.hasWinner ? `O Jogador "${game.hasWinner}" venceu` : "Deu velha"
        }
        isOpen={!!game.isGameOver || !!game.hasWinner}
        onClose={handleEndGameModalClick}
      />
    </Container>
  );
};
