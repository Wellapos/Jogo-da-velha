import styled from "styled-components";

import { theme } from "../../styles";

export const ButtonStyled = styled.button<{ color?: string }>`
  border: none;
  background-color: ${({ color }) => color ?? theme.colors.tertiary};
  padding: 10px;
  border-radius: 8px;
  color: ${theme.colors.white};
  font-family: "Bellota", sans-serif;
  font-weight: 700;
  cursor: pointer;
`;
