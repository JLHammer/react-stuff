import type { SkipLinkProps } from "./SkipLink.types";
import { SkipLinkStyled } from "./SkipLink.styled";

export const SkipLink = ({ href, children }: SkipLinkProps) => {
  return <SkipLinkStyled href={href}>{children}</SkipLinkStyled>;
};
