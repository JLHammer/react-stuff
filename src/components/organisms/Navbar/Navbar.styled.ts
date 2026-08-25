import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { media } from "../../../styles/mixins";
import { MenuToggleStyled } from "../../atoms/MenuToggle/MenuToggle.styled";
import type { NavbarPanelProps } from "./Navbar.types";

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;

  ul {
    gap: 35px;
  }

  ${MenuToggleStyled} {
    display: none;
  }

  ${media("desktop")} {
    flex-direction: column;
    align-items: stretch;
    width: 100%;

    ${MenuToggleStyled} {
      display: inline-flex;
      align-self: flex-end;
    }
  }
`;

export const NavbarPanel = styled.div<NavbarPanelProps>`
  display: flex;
  align-items: center;

  ${media("desktop")} {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.border};

    ul {
      flex-direction: column;
      align-items: stretch;
      gap: 0;
    }

    li {
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;

export const NavbarLinkStyled = styled(NavLink)`
  position: relative;
  display: inline-block;
  padding-bottom: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
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
  &:focus-visible,
  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:hover::after,
  &:focus-visible::after,
  &.active::after {
    transform: scaleX(1);
  }

  ${media("desktop")} {
    display: block;
    padding: ${({ theme }) => theme.spacing.xs} 0;

    &::after {
      content: none;
    }
  }
`;
