import styled from "styled-components";
import { headingOswald } from "../../../styles/mixins";

// Figma subject card: 400x219, flat colour, centred Oswald SemiBold 30 in white.
export const SubjectCardStyled = styled.article<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 219px;
  padding: ${({ theme }) => theme.spacing.s};
  background-color: ${({ $color }) => $color};
  overflow: hidden;
`;

export const SubjectCardTitle = styled.h3`
  ${headingOswald}
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
