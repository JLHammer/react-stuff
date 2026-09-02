import type { FormFieldProps } from "./FormField.types";
import { Label } from "../../atoms/Label/Label";
import { Input } from "../../atoms/Input/Input";
import {
  FormFieldStyled,
  FormFieldControl,
  FormFieldError,
  FormFieldHint,
} from "./FormField.styled";

export const FormField = ({
  id,
  name,
  label,
  value,
  onChange,
  type,
  placeholder,
  required,
  rows,
  error,
  hint,
}: FormFieldProps) => {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [error && errorId, hint && hintId]
    .filter(Boolean)
    .join(" ");

  return (
    <FormFieldStyled>
      <Label htmlFor={id} text={label} required={required} />
      <FormFieldControl>
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          hasError={Boolean(error)}
          describedBy={describedBy || undefined}
        />
        {error && (
          <FormFieldError id={errorId} role="alert">
            {error}
          </FormFieldError>
        )}
        {hint && <FormFieldHint id={hintId}>{hint}</FormFieldHint>}
      </FormFieldControl>
    </FormFieldStyled>
  );
};
