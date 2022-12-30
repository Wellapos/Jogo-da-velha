import React from "react";
import { Title } from "../../../../components";

import { GameUserProps } from "../../../../interfaces";

import { Avatar, Container } from "./styles";

export interface UserDetailsProps
  extends Omit<GameUserProps, "uid, displayName"> {
  isMyTurn: boolean;
}

export const UserDetails: React.FC<UserDetailsProps> = ({
  photoURL,
  isMyTurn,
  symbol,
}) => {
  return (
    <Container isMyTurn={isMyTurn}>
      <Avatar src={photoURL || ""} alt="Player photo" />
      <Title fontSize={30}>{symbol}</Title>
    </Container>
  );
};
