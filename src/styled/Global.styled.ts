import { createGlobalStyle } from "styled-components";
import { preflight } from "./Preflight.styled";

export const GlobalStyle = createGlobalStyle`
  ${preflight}

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.m};
    color: ${({ theme }) => theme.colors.dark};
  }

  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }
`;
