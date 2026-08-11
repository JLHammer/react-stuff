import type { ContainerProps } from "../types/types";

export const Container = ({ padding, bgColor }: ContainerProps) => {
  const containerStyle = {
    padding: `${padding}px`,
    backgroundColor: bgColor,
  };

  return <div style={containerStyle}>This is a container</div>;
};
