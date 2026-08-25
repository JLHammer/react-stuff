import type { ChangeEvent } from "react";

export type InputProps = {
  id: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: "text" | "email" | "password";
  placeholder?: string;
  // Used when Figma shows a field without a visible label.
  ariaLabel?: string;
  required?: boolean;
  // A row count turns the field into Figma's 400x143 multi-line input.
  rows?: number;
};
