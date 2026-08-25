import type { ImageProps } from "./Image.types";
import { ImageStyled } from "./Image.styled";

export const Image = ({ src, alt, width, height }: ImageProps) => {
  return (
    <ImageStyled src={src} alt={alt} width={width} height={height} loading="lazy" />
  );
};
