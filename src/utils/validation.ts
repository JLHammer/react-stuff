const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const hexColorPattern = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

export const isFilled = (value: string) => value.trim().length > 0;

export const isEmail = (value: string) => emailPattern.test(value.trim());

export const isHexColor = (value: string) => hexColorPattern.test(value.trim());

export const hasErrors = (errors: Record<string, string | undefined>) =>
  Object.values(errors).some(Boolean);
