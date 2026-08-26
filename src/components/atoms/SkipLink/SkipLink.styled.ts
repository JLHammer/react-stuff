import styled from "styled-components";

export const SkipLinkStyled = styled.a`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translateY(-100%);
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text};

  &:focus-visible {
    transform: translateY(0);
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: -2px;
  }
`;
