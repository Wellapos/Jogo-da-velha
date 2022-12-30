import styled from "styled-components";

export const Container = styled.div<{ isMyTurn: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;

  filter: ${({ isMyTurn }) => (isMyTurn ? "" : "grayscale(90%)")};
`;

export const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 9rem;
`;
