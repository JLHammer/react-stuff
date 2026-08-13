import type { NavigationLinkProps } from "../../../types/types";
import { NavigationLinkStyled } from "./NavigationLink.styled";

export const NavigationLink = ({ to, children }: NavigationLinkProps) => {
  return (
    <NavigationLinkStyled to={to} end>
      {children}
    </NavigationLinkStyled>
  );
};
