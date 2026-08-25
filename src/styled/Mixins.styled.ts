import { css } from "styled-components";
import { theme } from "./Theme.styled";

type Breakpoint = keyof typeof theme.breakpoints;
type Spacing = keyof typeof theme.spacing;

export const media = (breakpoint: Breakpoint) =>
  `@media (max-width: ${theme.breakpoints[breakpoint]})`;

export const contentWidth = css`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidths.content};
  margin: 0 auto;
`;

export const flexColumn = (gap?: Spacing) => css`
  display: flex;
  flex-direction: column;
  ${gap &&
  css`
    gap: ${({ theme }) => theme.spacing[gap]};
  `}
`;

export const flexRowCenter = (gap?: Spacing) => css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ${gap &&
  css`
    gap: ${({ theme }) => theme.spacing[gap]};
  `}
`;

export const formControl = css`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.s};
  font-family: inherit;
`;

export const goalIcon = css`
  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  .cls-1 {
    fill: currentColor;
  }

  .cls-2 {
    fill: none;
    stroke: currentColor;
    stroke-width: 2px;
  }
`;

export const labelText = css`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: bold;
  text-transform: uppercase;
`;
