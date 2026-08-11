import type { NavbarProps } from "../types/types";

export const Navbar = ({ display, children }: NavbarProps) => {
  const navbarStyle = {
    display: display,
    justifyContent: "space-between",
    alignItems: "center",
  };

  return <nav style={navbarStyle}>{children}</nav>;
};
