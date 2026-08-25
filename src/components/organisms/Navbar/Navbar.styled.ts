import styled from "styled-components";
import { NavLink } from "react-router-dom";
import type { NavbarStyledProps } from "../../../types/types.styled";

export const NavbarStyled = styled.nav<NavbarStyledProps>`
  display: ${({ $display }) => $display || "flex"};
  justify-content: space-between;
  align-items: center;
  color: ${({ $color, theme }) => $color || theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

export const NavbarLinkStyled = styled(NavLink)`
  position: relative;
  display: inline-block;
  padding-bottom: 0.25rem;
  color: inherit;
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 0 0;
    height: 2px;
    background-color: currentColor;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }

  &.active {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  &.active::after {
    transform: scaleX(1);
  }
`;
