import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { NavbarProps } from "./Navbar.types";
import { MenuToggle } from "../../atoms/MenuToggle/MenuToggle";
import { NavbarStyled, NavbarPanel } from "./Navbar.styled";

const panelId = "primary-navigation";

export const Navbar = ({ children }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Escape" || !isOpen) {
      return;
    }

    setIsOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <NavbarStyled aria-label="Hovedmenu" onKeyDown={handleKeyDown}>
      <MenuToggle
        ref={toggleRef}
        isOpen={isOpen}
        controls={panelId}
        onClick={() => setIsOpen(!isOpen)}
      />
      <NavbarPanel
        id={panelId}
        $isOpen={isOpen}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </NavbarPanel>
    </NavbarStyled>
  );
};
