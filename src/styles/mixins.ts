import { css } from "styled-components";
import { theme } from "./theme";

type Breakpoint = keyof typeof theme.breakpoints;
type Spacing = keyof typeof theme.spacing;

export const media = (breakpoint: Breakpoint) =>
  `@media (max-width: ${theme.breakpoints[breakpoint]})`;

// Figma places every page's content in a 1262px column centred in the 1440px frame.
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

// Figma "Input - Text": 400x32, white, 1px #ccc, 4px radius, inset shadow,
// 15px of left padding and a #999 placeholder.
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

// Figma "Button": Lavender Blush, 4px 20px, 4px radius, soft drop shadow.
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

// Figma h1: Oswald SemiBold 30, uppercase.
export const headingOswald = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-transform: uppercase;
`;

// The inline SVG icons shipped with the goal data use these two class names.
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
