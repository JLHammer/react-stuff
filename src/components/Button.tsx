import type { ButtonProps } from "../types/types";

export const Button = ({ textValue, disabled, count }: ButtonProps) => {
  return (
    <button disabled={disabled}>
      {textValue} - Count: {count}
    </button>
  );
};
