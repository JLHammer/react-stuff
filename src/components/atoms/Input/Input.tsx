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
  hasError,
  describedBy,
}: InputProps) => {
  if (rows) {
    return (
      <TextareaStyled
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        aria-label={ariaLabel}
        aria-invalid={hasError || undefined}
        aria-describedby={describedBy}
        value={value}
        onChange={onChange}
        required={required}
        $hasError={hasError}
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
      aria-invalid={hasError || undefined}
      aria-describedby={describedBy}
      value={value}
      onChange={onChange}
      required={required}
      $hasError={hasError}
    />
  );
};
