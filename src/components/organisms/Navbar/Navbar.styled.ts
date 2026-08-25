import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { media } from "../../../styles/mixins";

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;

  /* Figma spaces the nav items 35px apart. */
  ul {
    gap: 35px;
  }

  ${media("tablet")} {
    ul {
      justify-content: center;
      gap: ${({ theme }) => theme.spacing.s};
    }
  }
`;

// Figma nav link: Oswald Bold 20, uppercase, black - accent on the current page.
export const NavbarLinkStyled = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible,
  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
