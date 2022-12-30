import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Container, GoogleActions, Title } from "../../components";
import { useAuth } from "../../hooks";
import { theme } from "../../styles";

import { Content } from "./styles";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  const handleOnlineGame = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    navigate("/create");
  };

  return (
    <Container>
      <GoogleActions />

      <Title fontSize={60} padding="0 0 32px 0">
        Jogo da Velha
      </Title>

      <Content>
        <Button
          label="Jogar offline"
          color={theme.colors.gray}
          onClick={() => navigate("/offline")}
        />
        <Button
          label="Jogar online"
          color={theme.colors.red}
          onClick={handleOnlineGame}
        />
      </Content>
    </Container>
  );
};
