import { css } from "styled-components";
import { theme } from "./theme";

type Breakpoint = keyof typeof theme.breakpoints;
type Spacing = keyof typeof theme.spacing;

export const media = (breakpoint: Breakpoint) =>
  `@media (max-width: ${theme.breakpoints[breakpoint]})`;

export const contentWidth = css`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidths.content};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.s};
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

export const inputField = css`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.inputWidth};
  padding: 0 0 0 15px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.s};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.input};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const buttonSurface = css`
  padding: 4px 20px;
  border-radius: ${({ theme }) => theme.radii.s};
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  box-shadow: ${({ theme }) => theme.shadows.button};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  cursor: pointer;
  transition: filter 0.2s ease;

  &:hover,
  &:focus-visible {
    filter: brightness(0.95);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const headingOswald = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-transform: uppercase;
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
