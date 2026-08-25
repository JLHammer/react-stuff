import styled from "styled-components";
import { media } from "../../../styles/mixins";

// Figma puts the two inputs on the left and the 300x300 preview to the right.
export const GoalBuilderStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.l};

  ${media("tablet")} {
    flex-direction: column;
  }
`;

export const GoalBuilderFields = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
  flex: 1 1 481px;
`;
