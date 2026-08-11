import type { ContainerProps } from "../types/types";

export const Container = ({ padding, bgColor, children }: ContainerProps) => {
  const containerStyle = {
    padding: padding,
    backgroundColor: bgColor,
  };

  return <section style={containerStyle}>{children}</section>;
};
