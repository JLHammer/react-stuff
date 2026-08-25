import styled from "styled-components";
import { headingOswald } from "../../../styles/mixins";

// Figma "Frame 1" on Byg dit eget mål: a 300x300 preview with a 1px #ccc border.
export const GoalPreviewStyled = styled.div<{ $color: string }>`
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
