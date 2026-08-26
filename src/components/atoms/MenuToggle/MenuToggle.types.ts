import type { Ref } from "react";

export type MenuToggleProps = {
  ref?: Ref<HTMLButtonElement>;
  isOpen: boolean;
  controls: string;
  onClick: () => void;
  label?: string;
};

export type MenuToggleStyledProps = {
  $isOpen: boolean;
};
