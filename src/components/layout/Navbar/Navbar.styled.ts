import styled from "styled-components";
import type { NavbarStyledProps } from "../../../types/types.styled";

export const NavbarStyled = styled.nav<NavbarStyledProps>`
  display: ${({ $display }) => $display || "flex"};
  justify-content: space-between;
  align-items: center;
  border: solid 1px ${({ theme }) => theme.colors.dark};
  color: ${({ $color, theme }) => $color || theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
