import type { FooterProps } from "../../../types/types";
import { FooterStyled } from "./Footer.styled";

export const Footer = ({ children }: FooterProps) => {
  return <FooterStyled>{children}</FooterStyled>;
};
