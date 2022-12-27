import styled from "styled-components";

import { theme } from "../../styles";

export const ButtonStyled = styled.button`
  border: none;
  background-color: ${theme.colors.tertiary};
  padding: 10px;
  border-radius: 8px;
  color: ${theme.colors.white};
  font-family: "Bellota", sans-serif;
  font-weight: 700;
  cursor: pointer;
`;
