import React from "react";
import { Title } from "../../../../components";

import { GameUserProps } from "../../../../interfaces";

import { Avatar, Container } from "./styles";

export interface UserDetailsProps
  extends Omit<GameUserProps, "uid" | "symbol"> {
  onClick?: () => void;
}

export const UserDetails: React.FC<UserDetailsProps> = ({
  displayName,
  photoURL,
  onClick,
}) => {
  const hasInteration = !!onClick;

  return displayName ? (
    <Container
      onClick={onClick}
      pointer={hasInteration}
      title={hasInteration ? "Clique para entrar no jogo" : undefined}
    >
      <Avatar src={photoURL || ""} alt="Player photo" />
      <Title fontSize={15} width={hasInteration ? 155 : undefined}>
        {!hasInteration && displayName?.length > 15
          ? `${displayName?.slice(0, 15)}...`
          : displayName}
      </Title>
    </Container>
  ) : null;
};
