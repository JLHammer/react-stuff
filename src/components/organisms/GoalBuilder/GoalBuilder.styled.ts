import styled from "styled-components";
import { media } from "../../../styles/mixins";

export const GoalBuilderStyled = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.l};

  ${media("tablet")} {
    flex-direction: column;
  }
`;

export const GoalBuilderFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
  flex: 1 1 481px;
`;
