import type { CardProps } from "../types/types";

export const Card = ({ src, alt, width, height }: CardProps) => {
  const cardStyle = {
    width: width,
    height: height,
  };

  return <img src={src} alt={alt} style={cardStyle} />;
};
