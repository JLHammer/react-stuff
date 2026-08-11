import type { AnchorLinkProps } from "../types/types";

export const AnchorLink = ({ href, children, newTab }: AnchorLinkProps) => {
  const anchorLinkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      style={anchorLinkStyle}
    >
      {children}
    </a>
  );
};
