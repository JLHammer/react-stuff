import type { LogoProps } from "../../../types/types";
import { AnchorLink } from "../AnchorLink/AnchorLink";

export const Logo = ({ src, alt, href, newTab }: LogoProps) => {
  return (
    <AnchorLink href={href} newTab={newTab}>
      <img src={src} alt={alt} />
    </AnchorLink>
  );
};
