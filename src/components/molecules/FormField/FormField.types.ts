import type { ChangeEvent } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export type FormFieldProps = {
  id: string;
  name?: string;
  label: string;
  value?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  registration?: UseFormRegisterReturn;
  type?: "text" | "email" | "password";
  placeholder?: string;
  required?: boolean;
  rows?: number;
  error?: string;
  hint?: string;
};
