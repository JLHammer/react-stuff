import { css } from "styled-components";
import { theme } from "./theme";

type Breakpoint = keyof typeof theme.breakpoints;

export const media = (breakpoint: Breakpoint) =>
  `@media (max-width: ${theme.breakpoints[breakpoint]})`;

export const contentWidth = css`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidths.content};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.s};
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

export const formColumn = css`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;

export const formActions = css`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: ${({ theme }) =>
    `calc(${theme.sizes.labelWidth} + ${theme.spacing.s} + ${theme.sizes.inputWidth})`};

  ${media("mobile")} {
    max-width: 100%;
  }
`;

export const fieldStack = css`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: ${({ theme }) => theme.sizes.inputWidth};
`;

export const statusText = css`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const buttonSurface = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 20px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.s};
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  box-shadow: ${({ theme }) => theme.shadows.button};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 400;
  line-height: normal;
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

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;
