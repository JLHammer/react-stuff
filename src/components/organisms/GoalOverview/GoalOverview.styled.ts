import styled from "styled-components";
import { media } from "../../../styled/Mixins.styled";

export const GoalOverviewStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.m};
`;

export const GoalOverviewTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.l};
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;

export const GoalOverviewLogo = styled.img`
  aspect-ratio: 1 / 1;
  width: 100%;
  height: auto;
`;

export const GoalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${({ theme }) => theme.spacing.s};

  ${media("desktop")} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media("mobile")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
