import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationLinkStyled = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  padding-bottom: 0.25rem;
  border-bottom: 3px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primaryDark};
    font-weight: bold;
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
`;
