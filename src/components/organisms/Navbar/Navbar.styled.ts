import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { media } from "../../../styles/mixins";

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;

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
