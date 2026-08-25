import type { ButtonProps } from "../../../types/types";
import { LoginButtonStyled } from "./LoginButton.styled";

export const LoginButton = ({ textValue, disabled }: ButtonProps) => {
  return <LoginButtonStyled disabled={disabled}>{textValue}</LoginButtonStyled>;
};
