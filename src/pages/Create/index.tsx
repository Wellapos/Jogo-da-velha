import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Container, GoogleActions, Title } from "../../components";
import { useAuth } from "../../hooks";
import { theme } from "../../styles";
import { Content } from "./styles";

export const Create: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <Container>
      <GoogleActions />

      <Title fontSize={60} padding="0 0 32px 0">
        Jogo da Memória
      </Title>

      <Content>
        <Button label="Criar uma partida online" color={theme.colors.red} />
        <Button label="Entrar em uma partida" color={theme.colors.blue} />
      </Content>
    </Container>
  );
};
