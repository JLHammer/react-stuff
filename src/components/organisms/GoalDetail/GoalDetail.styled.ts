import styled from "styled-components";
import { media } from "../../../styles/mixins";

export const GoalDetailStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m};
`;

export const GoalDetailByline = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 600;
`;

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

export const GoalDetailVideo = styled.figure`
  width: 100%;
  max-width: 872px;

  iframe {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 0;
  }
`;

export const GoalDetailVideoCaption = styled.figcaption`
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.placeholder};
`;
