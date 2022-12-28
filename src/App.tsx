import React from "react";
import { ThemeProvider } from "styled-components";

import { Router } from "./Router";

import { Provider } from "./contexts";
import { GlobalStyle, theme } from "./styles";

export const App: React.FC = () => {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Provider>
  );
};
