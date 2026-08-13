import { Link } from "react-router-dom";
import type { LogoProps } from "../../../types/types";
import { AnchorLink } from "../AnchorLink/AnchorLink";

export const Logo = ({ src, alt, href, newTab }: LogoProps) => {
  if (href.startsWith("/")) {
    return (
      <Link to={href}>
        <img src={src} alt={alt} />
      </Link>
    );
  }

  return (
    <AnchorLink href={href} newTab={newTab}>
      <img src={src} alt={alt} />
    </AnchorLink>
  );
};
