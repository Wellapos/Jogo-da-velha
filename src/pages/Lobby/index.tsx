import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Button, Container, GoogleActions, Title } from "../../components";
import { useAuth, useDatabase, useOnlineGame } from "../../hooks";
import { theme } from "../../styles";
import { errorToastOptions } from "../../utils";
import { UserDetails } from "./components/UserDetails";
import { AvatarWrapper, Content } from "./styles";

export const Lobby: React.FC = () => {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { id } = useParams();
  const { updateGame } = useDatabase();

  const [dots, setDots] = useState(".");

  const { game } = useOnlineGame(id);

  const handleSecondPlayerEnter = async () => {
    if (!id) return;

    if (!user) {
      toast.error("Você precisa fazer login para jogar.", errorToastOptions);
      return;
    }

    if (user.uid === game.firstPlayer?.uid) {
      toast.error("Você não pode jogar com você mesmo.", errorToastOptions);
      return;
    }

    await updateGame({
      id,
      game: {
        secondPlayer: {
          ...user,
          symbol: "o",
        },
        ...game,
      },
    });
  };

  const handleStartGame = async () => {
    if (!id) return;

    if (!user) {
      toast.error("Você precisa fazer login para jogar.", errorToastOptions);
      return;
    }

    if (user.uid !== game.firstPlayer?.uid) {
      toast.error(
        "Somente o primeiro jogador pode iniciar a partida.",
        errorToastOptions
      );
      return;
    }

    if (!game.secondPlayer) {
      toast.error("Não é possível iniciar o jogo sozinho.", errorToastOptions);
      return;
    }

    await updateGame({
      id,
      game: {
        ...game,
        isStarted: true,
      },
    });
  };

  useEffect(() => {
    if (!game) return;

    if (game.isStarted) {
      navigate(`/${id}/game`);
    }
  }, [game]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDots((state) => (state.length === 3 ? "" : `${state}.`));
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [dots]);

  return (
    <Container>
      <GoogleActions />

      <Title fontSize={60} padding="0 0 32px 0">
        Jogo da Velha
      </Title>

      <Content>
        <AvatarWrapper>
          {!!game.firstPlayer && <UserDetails {...game.firstPlayer} />}
          {!!game.secondPlayer ? (
            <UserDetails {...game.secondPlayer} />
          ) : (
            <UserDetails
              photoURL="https://i.imgur.com/gITf5HZ.png"
              displayName={`Esperando adversário${dots}`}
              onClick={handleSecondPlayerEnter}
            />
          )}
        </AvatarWrapper>

        <Button
          label="Iniciar jogo"
          onClick={handleStartGame}
          color={theme.colors.secondary}
        />
      </Content>
    </Container>
  );
};
