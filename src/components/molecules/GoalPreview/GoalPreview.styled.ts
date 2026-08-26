import styled from "styled-components";
import { headingOswald } from "../../../styles/mixins";
import type { GoalPreviewStyledProps } from "./GoalPreview.types";

export const GoalPreviewStyled = styled.output<GoalPreviewStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  max-width: 100%;
  aspect-ratio: 1 / 1;
  padding: ${({ theme }) => theme.spacing.s};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ $color }) => $color};
`;

export const GoalPreviewText = styled.p`
  ${headingOswald}
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  overflow-wrap: break-word;
`;
