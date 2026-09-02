import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

export const LoaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.s};
  min-height: 100vh;
  animation: ${fadeIn} 0.5s ease-in;
`;

export const LoaderSpinner = styled.div`
  width: 64px;
  height: 64px;
  border: 6px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.round};
  animation: ${spin} 1s linear infinite;
`;

export const LoaderText = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.text};
`;
