import type { HeaderProps } from "./Header.types";
import { TopBar } from "../../atoms/TopBar/TopBar";
import { HeaderRowStyled, HeaderStyled } from "./Header.styled";

export const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderStyled>
      <TopBar />
      <HeaderRowStyled>{children}</HeaderRowStyled>
    </HeaderStyled>
  );
};
