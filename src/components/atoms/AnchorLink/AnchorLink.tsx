import type { AnchorLinkProps } from "./AnchorLink.types";

export const AnchorLink = ({ href, children, newTab }: AnchorLinkProps) => {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
