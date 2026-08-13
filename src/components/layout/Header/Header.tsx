import type { HeaderProps } from "../../../types/types";
import { TopBar } from "../../content/TopBar/TopBar";
import { HeaderRowStyled, HeaderStyled } from "./Header.styled";

export const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderStyled>
      <TopBar />
      <HeaderRowStyled>{children}</HeaderRowStyled>
    </HeaderStyled>
  );
};
