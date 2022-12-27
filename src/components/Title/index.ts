import styled from "styled-components";
import { theme } from "../../styles";

export interface TitleProps {
  fontSize?: number;
  fontWeight?: "300" | "500" | "700";
  padding?: string;
}

export const Title = styled.h1<TitleProps>`
  font-family: "Bellota", sans-serif;
  font-size: ${({ fontSize }) => `${fontSize}px` ?? "42px"};
  font-weight: ${({ fontWeight }) => fontWeight ?? 300};

  color: ${theme.colors.text};

  padding: ${({ padding }) => padding ?? "0px"};
`;
