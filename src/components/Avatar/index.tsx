import React, { useEffect, useState } from "react";
import ReactNiceAvatar, {
  AvatarFullConfig,
  genConfig,
} from "react-nice-avatar";

import { GameSymbols } from "../../interfaces";
import { Title } from "../Title";
import { AvatarContent } from "./styles";

export interface AvatarProps {
  symbol: GameSymbols;
  isMyTurn: boolean;
  isSecondPlayer?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  symbol,
  isMyTurn,
  isSecondPlayer,
}) => {
  const [config, setConfig] = useState<AvatarFullConfig>();

  useEffect(() => {
    setConfig(genConfig());
  }, []);

  return (
    <AvatarContent isMyTurn={isMyTurn} isSecondPlayer={isSecondPlayer}>
      <ReactNiceAvatar style={{ width: "8rem", height: "8rem" }} {...config} />

      <Title fontSize={40} fontWeight="700">
        {symbol}
      </Title>
    </AvatarContent>
  );
};
