import type { InputProps } from "./Input.types";
import { InputStyled, TextareaStyled } from "./Input.styled";

export const Input = ({
  id,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  ariaLabel,
  required,
  rows,
}: InputProps) => {
  if (rows) {
    return (
      <TextareaStyled
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
        required={required}
      />
    );
  }

  return (
    <InputStyled
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};
