import type { CardProps } from "../../../types/types";
import { CardStyled } from "./Card.styled";

export const Card = ({ src, alt, $width, $height }: CardProps) => {
  return <CardStyled src={src} alt={alt} $width={$width} $height={$height} />;
};
