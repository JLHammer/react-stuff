import type { NavbarProps } from "../../../types/types";
import { NavbarStyled } from "./Navbar.styled";

export const Navbar = ({ $color, $display, children }: NavbarProps) => {
  return (
    <NavbarStyled $color={$color} $display={$display}>
      {children}
    </NavbarStyled>
  );
};
