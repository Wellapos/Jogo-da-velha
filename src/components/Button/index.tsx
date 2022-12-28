import React from "react";
import { ButtonStyled } from "./styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, color, ...props }) => {
  return (
    <ButtonStyled color={color} {...props}>
      {label}
    </ButtonStyled>
  );
};
