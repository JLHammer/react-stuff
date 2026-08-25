import styled from "styled-components";
import { Link } from "react-router-dom";
import { goalIcon } from "../../../styles/mixins";
import type { GoalCardStyledProps } from "./GoalCard.types";

export const GoalCardStyled = styled(Link)<GoalCardStyledProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  aspect-ratio: 1 / 1;
  padding: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ $color }) => $color};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover,
  &:focus-visible {
    opacity: 0.85;
  }
`;

export const GoalCardHeading = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const GoalCardNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 0.85;
`;

export const GoalCardTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.05;
  overflow-wrap: anywhere;
`;

export const GoalCardIcon = styled.div`
  ${goalIcon}
  width: 62%;
  margin: auto auto 0;
`;
