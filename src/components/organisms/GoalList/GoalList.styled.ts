import styled from "styled-components";
import { contentWidth, headingOswald, media } from "../../../styles/mixins";

export const GoalListStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.bannerBackground};
  padding: ${({ theme }) => `${theme.spacing.m} 0 ${theme.spacing.xl}`};
`;

export const GoalListInner = styled.div`
  ${contentWidth}
`;

export const GoalListTitle = styled.h2`
  ${headingOswald}
  text-align: center;
`;

export const GoalListDivider = styled.div`
  position: relative;
  width: 270px;
  max-width: 100%;
  height: 10px;
  margin: ${({ theme }) => `${theme.spacing.xs} auto ${theme.spacing.m}`};

  &::before {
    content: "";
    position: absolute;
    inset: 50% 0 auto 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.placeholder};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    border: 1px solid ${({ theme }) => theme.colors.placeholder};
    border-radius: ${({ theme }) => theme.radii.round};
    background-color: ${({ theme }) => theme.colors.bannerBackground};
  }
`;

export const GoalGrid = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;

  ${media("desktop")} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${media("mobile")} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const GoalListLogo = styled.img`
  aspect-ratio: 1 / 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: ${({ theme }) => theme.spacing.xs};
`;
