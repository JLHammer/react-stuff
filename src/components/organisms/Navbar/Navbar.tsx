import { useState } from "react";
import type { NavbarProps } from "./Navbar.types";
import { MenuToggle } from "../../atoms/MenuToggle/MenuToggle";
import { NavbarStyled, NavbarPanel } from "./Navbar.styled";

const panelId = "primary-navigation";

export const Navbar = ({ children }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarStyled aria-label="Hovedmenu">
      <MenuToggle
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
