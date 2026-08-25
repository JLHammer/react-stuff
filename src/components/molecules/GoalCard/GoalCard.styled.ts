import styled from "styled-components";
import { Link } from "react-router-dom";
import { flexColumn, goalIcon } from "../../../styled/Mixins.styled";
import type { GoalCardStyledProps } from "../../../types/types.styled";

export const GoalCardStyled = styled(Link)<GoalCardStyledProps>`
  ${flexColumn("s")}
  justify-content: space-between;
  aspect-ratio: 1 / 1;
  padding: ${({ theme }) => theme.spacing.s};
  background-color: #${({ $color }) => $color};
  color: ${({ theme }) => theme.colors.light};

  &:hover,
  &:focus-visible {
    opacity: 0.85;
  }
`;

export const GoalCardNumber = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
  line-height: 1;
`;

export const GoalCardTitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-transform: uppercase;
  line-height: 1.2;
  overflow-wrap: break-word;
`;

export const GoalCardIcon = styled.div`
  ${goalIcon}
  align-self: flex-end;
  width: 40%;
`;
