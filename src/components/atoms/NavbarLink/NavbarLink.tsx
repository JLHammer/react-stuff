import type { NavbarLinkProps } from "./NavbarLink.types";
import { NavbarLinkStyled } from "./NavbarLink.styled";

export const NavbarLink = ({ to, end = true, children }: NavbarLinkProps) => {
  return (
    <NavbarLinkStyled to={to} end={end}>
      {children}
    </NavbarLinkStyled>
  );
};
