import type { NavbarLinkProps } from "../../../types/types";
import { NavbarLinkStyled } from "./Navbar.styled";

export const NavbarLink = ({ to, end = true, children }: NavbarLinkProps) => {
  return (
    <NavbarLinkStyled to={to} end={end}>
      {children}
    </NavbarLinkStyled>
  );
};
