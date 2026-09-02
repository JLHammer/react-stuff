import type { ChangeEvent } from "react";

export type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  value?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: "text" | "email" | "password";
  placeholder?: string;
  required?: boolean;
  rows?: number;
  error?: string;
  hint?: string;
};
