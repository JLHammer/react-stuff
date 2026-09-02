import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { statusText } from "../../../styles/mixins";

export const ThemeNavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const ThemeNavTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.placeholder};
`;

export const ThemeNavStatus = styled.p`
  ${statusText}
`;

export const ThemeNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ThemeNavLink = styled(NavLink)`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible,
  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
