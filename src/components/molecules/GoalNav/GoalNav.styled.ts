import styled from "styled-components";
import { Link } from "react-router-dom";
import { buttonSurface, goalIcon, media } from "../../../styles/mixins";
import type { GoalNavLinkStyledProps } from "./GoalNav.types";

export const GoalNavStyled = styled.nav`
  display: grid;
  align-items: stretch;
  grid-template-columns: 1fr auto 1fr;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.m};

  ${media("tablet")} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const GoalNavLink = styled(Link)<GoalNavLinkStyledProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.s}`};
  background-color: ${({ $color }) => $color};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: opacity 0.2s ease;

  ${({ $align }) =>
    $align === "end" &&
    `
      flex-direction: row-reverse;
      text-align: right;
    `}

  &:hover,
  &:focus-visible {
    opacity: 0.85;
  }
`;

export const GoalNavIcon = styled.div`
  ${goalIcon}
  flex: 0 0 auto;
  width: 40px;
`;

export const GoalNavText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const GoalNavDirection = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const GoalNavTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.1;
  overflow-wrap: anywhere;
`;

export const GoalNavOverview = styled(Link)`
  ${buttonSurface}
  display: flex;
  align-items: center;
  text-decoration: none;

  ${media("tablet")} {
    grid-column: 1 / -1;
    order: -1;
    justify-content: center;
  }
`;
