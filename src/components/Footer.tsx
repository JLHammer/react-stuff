import type { FooterProps } from "../types/types";

export const Footer = ({ children }: FooterProps) => {
  const footerStyle = {
    backgroundColor: "#036395",
    color: "white",
  };

  return <footer style={footerStyle}>{children}</footer>;
};
