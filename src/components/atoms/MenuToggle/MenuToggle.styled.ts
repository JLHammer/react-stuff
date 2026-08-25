import styled, { css } from "styled-components";
import type { MenuToggleStyledProps } from "./MenuToggle.types";

const barWidth = "24px";
const barOffset = "7px";

export const MenuToggleStyled = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: 0.5rem 0;
  background-color: transparent;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const MenuToggleBars = styled.span<MenuToggleStyledProps>`
  position: relative;
  display: block;
  width: ${barWidth};
  height: 2px;
  background-color: currentColor;
  transition: background-color 0.2s ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: ${barWidth};
    height: 2px;
    background-color: currentColor;
    transition: transform 0.2s ease;
  }

  &::before {
    top: -${barOffset};
  }

  &::after {
    top: ${barOffset};
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      background-color: transparent;

      &::before {
        transform: translateY(${barOffset}) rotate(45deg);
      }

      &::after {
        transform: translateY(-${barOffset}) rotate(-45deg);
      }
    `}
`;
