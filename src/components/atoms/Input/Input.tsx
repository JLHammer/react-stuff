import type { InputProps } from "./Input.types";
import { InputStyled, TextareaStyled } from "./Input.styled";

export const Input = ({
  id,
  name,
  value,
  onChange,
  registration,
  type = "text",
  placeholder,
  ariaLabel,
  required,
  rows,
  hasError,
  describedBy,
}: InputProps) => {
  const fieldProps = registration ?? { name, value, onChange };

  if (rows) {
    return (
      <TextareaStyled
        id={id}
        rows={rows}
        placeholder={placeholder}
        aria-label={ariaLabel}
        aria-invalid={hasError || undefined}
        aria-describedby={describedBy}
        required={required}
        $hasError={hasError}
        {...fieldProps}
      />
    );
  }

  return (
    <InputStyled
      id={id}
      type={type}
      placeholder={placeholder}
      aria-label={ariaLabel}
      aria-invalid={hasError || undefined}
      aria-describedby={describedBy}
      required={required}
      $hasError={hasError}
      {...fieldProps}
    />
  );
};
