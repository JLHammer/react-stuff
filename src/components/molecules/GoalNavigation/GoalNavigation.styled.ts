import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../../styled/Mixins.styled";

export const GoalNavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s};
  padding-top: ${({ theme }) => theme.spacing.m};
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};

  ${media("tablet")} {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
`;

export const GoalNavigationLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryDark};

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`;

export const GoalNavigationSpacer = styled.span`
  ${media("tablet")} {
    display: none;
  }
`;
