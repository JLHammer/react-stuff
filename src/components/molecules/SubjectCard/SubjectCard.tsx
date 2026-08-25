import type { SubjectCardProps } from "./SubjectCard.types";
import { SubjectCardStyled, SubjectCardTitle } from "./SubjectCard.styled";

export const SubjectCard = ({ name, color }: SubjectCardProps) => {
  return (
    <SubjectCardStyled $color={color}>
      <SubjectCardTitle>{name}</SubjectCardTitle>
    </SubjectCardStyled>
  );
};
