import styled from "styled-components";
import { media } from "../styles/mixins";

export const ThemePageLayout = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: 160px minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.l};

  ${media("tablet")} {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.s};
  }
`;

export const ThemePageHint = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
