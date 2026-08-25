import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { labelText } from "../../../styled/Mixins.styled";
import type { NavbarStyledProps } from "../../../types/types.styled";

export const NavbarStyled = styled.nav<NavbarStyledProps>`
  display: ${({ $display }) => $display || "flex"};
  align-items: center;
  color: ${({ $color, theme }) => $color || theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const NavbarLinkStyled = styled(NavLink)`
  ${labelText}
  position: relative;
  display: inline-block;
  padding-bottom: 0.25rem;
  color: inherit;
  white-space: nowrap;
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
    color: ${({ theme }) => theme.colors.blueDark};
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }

  &.active {
    color: ${({ theme }) => theme.colors.attention};
  }
`;
