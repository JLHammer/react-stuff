import styled from "styled-components";
import { headingOswald, media } from "../../../styles/mixins";
import type { SubjectCardStyledProps } from "./SubjectCard.types";

export const SubjectCardStyled = styled.li<SubjectCardStyledProps>`
  ${headingOswald}
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ theme }) => theme.sizes.subjectCardHeight};
  padding: ${({ theme }) => theme.spacing.s};
  background-color: ${({ $color }) => $color};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  overflow-wrap: anywhere;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  ${media("mobile")} {
    min-height: ${({ theme }) => theme.sizes.subjectCardHeightSmall};
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
