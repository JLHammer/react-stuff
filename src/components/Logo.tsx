import type { LogoProps } from "../types/types";
import { AnchorLink } from "./AnchorLink";

export const Logo = ({ src, alt }: LogoProps) => {
  return (
    <AnchorLink href="/">
      <img src={src} alt={alt} />
    </AnchorLink>
  );
};
