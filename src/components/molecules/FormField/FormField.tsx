import type { FormFieldProps } from "./FormField.types";
import { Label } from "../../atoms/Label/Label";
import { Input } from "../../atoms/Input/Input";
import {
  FormFieldStyled,
  FormFieldControl,
  FormFieldError,
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
}: FormFieldProps) => {
  const errorId = `${id}-error`;

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
          describedBy={error ? errorId : undefined}
        />
        {error && (
          <FormFieldError id={errorId} role="alert">
            {error}
          </FormFieldError>
        )}
      </FormFieldControl>
    </FormFieldStyled>
  );
};
