import type { CSSProperties } from "react";
import type { HeaderProps } from "../types/types";

export const Header = ({ children }: HeaderProps) => {
  const headerStyle: CSSProperties = {
    display: "flex",
    gap: "1rem",
  };

  return <header style={headerStyle}>{children}</header>;
};
