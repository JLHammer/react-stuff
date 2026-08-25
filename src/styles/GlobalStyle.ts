import { createGlobalStyle } from "styled-components";
import { preflight } from "./preflight";

export const GlobalStyle = createGlobalStyle`
  ${preflight}

  html {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }

  a {
    text-decoration: underline;
  }
`;
