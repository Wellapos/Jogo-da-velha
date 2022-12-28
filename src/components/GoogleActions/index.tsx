import React from "react";

import { useAuth } from "../../hooks";
import { theme } from "../../styles";

import { Button } from "../Button";
import { Title } from "../Title";

import { Avatar, Container } from "./styles";

export const GoogleActions: React.FC = () => {
  const { user, signInWithGoogle, signOut } = useAuth();

  return user ? (
    <Container>
      <Avatar src={user.photoURL || ""} />
      <Title fontSize={20} padding="0 20px">
        {user.displayName}
      </Title>
      <Button label="Sair" color={theme.colors.gray} onClick={signOut} />
    </Container>
  ) : (
    <Container>
      <Button
        label="Fazer login"
        color={theme.colors.red}
        onClick={signInWithGoogle}
      />
    </Container>
  );
};
