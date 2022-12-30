import styled from "styled-components";

export const Container = styled.div<{ pointer?: boolean; width?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;

  cursor: ${({ pointer }) => (pointer ? "pointer" : "auto")};

  width: ${({ width }) => (width ? `${width}px` : "auto")};
`;

export const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 9rem;
`;
