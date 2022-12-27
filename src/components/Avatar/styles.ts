import styled from "styled-components";

export interface AvatarContentProps {
  isMyTurn: boolean;
  isSecondPlayer?: boolean;
}

export const AvatarContent = styled.div<AvatarContentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 2rem;

  transition: filter 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  transform: ${({ isSecondPlayer }) => (isSecondPlayer ? "scaleX(-1)" : "")};

  filter: ${({ isMyTurn }) => (isMyTurn ? "" : "grayscale(90%)")};
`;
