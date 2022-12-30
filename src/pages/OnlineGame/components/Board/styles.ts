import styled from "styled-components";
import { GameSymbols, PlaceOptions } from "../../../../interfaces";

import { theme } from "../../../../styles";

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 15rem;
  height: 15rem;
`;

export interface SquareProps {
  place: PlaceOptions;
  symbol: GameSymbols;
}

export const Square = styled.button<SquareProps>`
  width: 5rem;
  height: 5rem;

  border: ${theme.colors.default} 2px solid;
  background-color: transparent;

  border-top: ${({ place }) =>
    ["one", "two", "three"].includes(place) && "none"};

  border-right: ${({ place }) =>
    ["three", "six", "nine"].includes(place) && "none"};

  border-bottom: ${({ place }) =>
    ["seven", "eigth", "nine"].includes(place) && "none"};

  border-left: ${({ place }) =>
    ["one", "four", "seven"].includes(place) && "none"};

  cursor: pointer;

  color: ${theme.colors.tertiary};

  &::before {
    content: ${({ symbol }) => {
      switch (symbol) {
        case "x":
          return "'close'";
        case "o":
          return "'radio_button_unchecked'";
      }
    }};
    font-size: 2.5rem;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
