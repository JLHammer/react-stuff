import type { CSSProperties } from "react";
import type { MainProps } from "../types/types";

export const Main = ({ children }: MainProps) => {
  const mainStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  return <main style={mainStyle}>{children}</main>;
};
