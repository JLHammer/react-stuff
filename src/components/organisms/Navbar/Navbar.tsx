import type { NavbarProps } from "./Navbar.types";
import { NavbarStyled } from "./Navbar.styled";

export const Navbar = ({ children }: NavbarProps) => {
  return <NavbarStyled>{children}</NavbarStyled>;
};
