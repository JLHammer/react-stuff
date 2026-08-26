import type { SubjectCardProps } from "./SubjectCard.types";
import { SubjectCardStyled } from "./SubjectCard.styled";

export const SubjectCard = ({ name, color }: SubjectCardProps) => {
  return <SubjectCardStyled $color={color}>{name}</SubjectCardStyled>;
};
