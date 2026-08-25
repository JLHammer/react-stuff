import type { GoalCardProps } from "./GoalCard.types";
import { GoalIcon } from "../../atoms/GoalIcon/GoalIcon";
import {
  GoalCardStyled,
  GoalCardHeading,
  GoalCardNumber,
  GoalCardTitle,
  GoalCardIcon,
} from "./GoalCard.styled";

export const GoalCard = ({ id, title, color, icon }: GoalCardProps) => {
  return (
    <GoalCardStyled to={`/maal/${id}`} $color={color}>
      <GoalCardHeading>
        <GoalCardNumber>{id}</GoalCardNumber>
        <GoalCardTitle>{title}</GoalCardTitle>
      </GoalCardHeading>
      <GoalCardIcon aria-hidden="true">
        <GoalIcon icon={icon} />
      </GoalCardIcon>
    </GoalCardStyled>
  );
};
