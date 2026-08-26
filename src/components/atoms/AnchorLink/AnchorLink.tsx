import type { AnchorLinkProps } from "./AnchorLink.types";

export const AnchorLink = ({ href, children, newTab }: AnchorLinkProps) => {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};
