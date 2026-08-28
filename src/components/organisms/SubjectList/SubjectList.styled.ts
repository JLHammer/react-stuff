import styled from "styled-components";
import { headingOswald, media, statusText } from "../../../styles/mixins";

export const SubjectListStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m};

  ${media("mobile")} {
    gap: ${({ theme }) => theme.spacing.s};
  }
`;

export const SubjectListTitle = styled.h2`
  ${headingOswald}
  text-align: center;

  ${media("mobile")} {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

export const SubjectListDivider = styled.hr`
  position: relative;
  border-top-width: 0;
  width: 270px;
  max-width: 100%;
  height: 10px;
  margin: ${({ theme }) => `-${theme.spacing.xs} auto 0`};

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
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const SubjectListStatus = styled.p`
  ${statusText}
  text-align: center;
`;

export const SubjectGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.l};

  ${media("tablet")} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.s};
  }

  ${media("mobile")} {
    grid-template-columns: minmax(0, 1fr);
  }
`;
