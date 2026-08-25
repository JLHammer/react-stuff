import type { ButtonProps } from "./Button.types";
import { ButtonStyled } from "./Button.styled";

export const Button = ({
  label,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyled type={type} disabled={disabled} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};
