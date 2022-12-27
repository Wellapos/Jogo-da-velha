import { createGlobalStyle } from "styled-components";

import { ThemeType } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: color 0.5s, background-color 0.5s, stroke 0.5s;
  }
  body {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
