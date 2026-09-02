import styled from "styled-components";
import { media, statusText } from "../../../styles/mixins";

export const ThemeGoalListStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;

export const ThemeGoalListTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 600;
`;

export const ThemeGoalListStatus = styled.p`
  ${statusText}
`;

export const ThemeGoalGrid = styled.ul`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xs};

  ${media("desktop")} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${media("mobile")} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
