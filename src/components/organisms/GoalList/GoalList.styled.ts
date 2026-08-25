import styled from "styled-components";
import { contentWidth, headingOswald, media } from "../../../styles/mixins";

// Figma "Goals Section": 1440x821 on a light grey band.
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

// The 270x10 divider under the title: a hairline with a dot in the middle.
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

// 6 columns x 3 rows of 200px tiles with a 12px gutter.
export const GoalGrid = styled.div`
  display: grid;
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
  align-self: center;
  justify-self: center;
  width: 100%;
  height: auto;
  padding: ${({ theme }) => theme.spacing.xs};
`;
