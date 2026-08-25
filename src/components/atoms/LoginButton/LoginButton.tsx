import type { ButtonProps } from "../../../types/types";

export const LoginButton = ({ textValue, disabled }: ButtonProps) => {
  return <button disabled={disabled}>{textValue}</button>;
};
