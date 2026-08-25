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

export const formControl = css`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.s};
  font-family: inherit;
`;
