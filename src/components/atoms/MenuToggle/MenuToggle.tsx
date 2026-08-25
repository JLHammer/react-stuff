import type { MenuToggleProps } from "./MenuToggle.types";
import { MenuToggleStyled, MenuToggleBars } from "./MenuToggle.styled";

export const MenuToggle = ({
  isOpen,
  controls,
  onClick,
  label = "Menu",
}: MenuToggleProps) => {
  return (
    <MenuToggleStyled
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={controls}
    >
      <MenuToggleBars $isOpen={isOpen} aria-hidden="true" />
      {label}
    </MenuToggleStyled>
  );
};
