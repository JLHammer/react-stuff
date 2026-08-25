// Every value below is taken from the Figma file
// "FN's verdensmål - React Case" (IRpLkMYhQPZ8ErnoSfuv0V),
// which is the source of truth for the design.

export const theme = {
  colors: {
    // Figma variable "Color" - topbar and the active nav link
    accent: "#2bbbde",
    white: "#ffffff",
    // Figma sets body copy and headings in plain black
    text: "#000000",
    // "Main Header" bar behind every page title
    bannerBackground: "#ededed",
    // Figma variable "Lavender Blush" - every button
    buttonBackground: "#f7ebec",
    footerBackground: "#035984",
    border: "#cccccc",
    placeholder: "#999999",
    required: "#e5243b",
  },

  fonts: {
    heading: "'Oswald', sans-serif",
    body: "'Open Sans', sans-serif",
  },

  // 14 / 16 / 20 / 24 / 30 px - the five sizes Figma actually uses
  fontSizes: {
    xs: "0.875rem",
    s: "1rem",
    m: "1.25rem",
    l: "1.5rem",
    xl: "1.875rem",
  },

  spacing: {
    xs: "0.75rem",
    s: "1rem",
    m: "1.5rem",
    l: "2rem",
    xl: "3.5rem",
  },

  sizes: {
    topBarHeight: "30px",
    bannerHeight: "100px",
    headerLogoHeight: "108px",
    footerLogoHeight: "3.75rem",
    footerLogoHeightLarge: "8.75rem",
    inputWidth: "400px",
    inputHeight: "32px",
    textareaHeight: "143px",
    labelWidth: "125px",
    likeButtonSize: "64px",
  },

  maxWidths: {
    page: "1440px",
    content: "1262px",
  },

  radii: {
    s: "4px",
    m: "8px",
    pill: "999px",
    round: "50%",
  },

  shadows: {
    input: "inset 1px 1px 3px rgba(0, 0, 0, 0.25)",
    button: "0 4px 4px rgba(0, 0, 0, 0.15)",
  },

  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
};
