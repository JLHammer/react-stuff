import type { NavbarLinkProps } from "./Navbar.types";
import { NavbarLinkStyled } from "./Navbar.styled";

export const NavbarLink = ({ to, end = true, children }: NavbarLinkProps) => {
  return (
    <NavbarLinkStyled to={to} end={end}>
      {children}
    </NavbarLinkStyled>
  );
};
