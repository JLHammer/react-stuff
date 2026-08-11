import type { CSSProperties } from "react";

export const Footer = () => {
  const footerStyle: CSSProperties = {
    backgroundColor: "#036395",
    color: "white",
  };

  return <footer style={footerStyle}>This is a footer</footer>;
};
