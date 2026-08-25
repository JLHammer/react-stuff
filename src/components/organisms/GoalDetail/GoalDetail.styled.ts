import styled from "styled-components";
import { media } from "../../../styles/mixins";

export const GoalDetailStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m};
`;

// Figma h2: Open Sans SemiBold 24.
export const GoalDetailByline = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 600;
`;

// Figma puts the 872x492 photo on the left and the 64px like button
// against the right edge of the content column.
export const GoalDetailMedia = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.m};

  ${media("tablet")} {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const GoalDetailFigure = styled.figure`
  flex: 0 1 872px;
  min-width: 0;
`;

export const GoalDetailText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;
