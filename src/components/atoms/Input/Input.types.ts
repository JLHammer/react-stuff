import type { ChangeEvent, FocusEvent } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export type InputProps = {
  id: string;
  name?: string;
  value?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  registration?: UseFormRegisterReturn;
  type?: "text" | "email" | "password";
  placeholder?: string;
  ariaLabel?: string;
  required?: boolean;
  rows?: number;
  hasError?: boolean;
  describedBy?: string;
};

export type InputStyledProps = {
  $hasError?: boolean;
};
