export type ButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};
