import type { HeaderProps } from "../../../types/types";
import { HeaderStyled } from "./Header.styled";

export const Header = ({ children }: HeaderProps) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};
