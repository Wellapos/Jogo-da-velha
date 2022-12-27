import React from "react";
import { ButtonStyled } from "./styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <ButtonStyled {...props}>{label}</ButtonStyled>;
};
