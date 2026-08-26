import type { ChangeEvent } from "react";

export type InputProps = {
  id: string;
  name: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
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
