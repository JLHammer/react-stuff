export type MenuToggleProps = {
  isOpen: boolean;
  controls: string;
  onClick: () => void;
  label?: string;
};

export type MenuToggleStyledProps = {
  $isOpen: boolean;
};
