import type { GoalCardProps } from "../../../types/types";
import { GoalIcon } from "../../atoms/GoalIcon/GoalIcon";
import {
  GoalCardStyled,
  GoalCardNumber,
  GoalCardTitle,
  GoalCardIcon,
} from "./GoalCard.styled";

export const GoalCard = ({ id, title, color, icon }: GoalCardProps) => {
  return (
    <GoalCardStyled to={`/maal/${id}`} $color={color}>
      <div>
        <GoalCardNumber>{id}</GoalCardNumber>
        <GoalCardTitle>{title}</GoalCardTitle>
      </div>
      <GoalCardIcon aria-hidden="true">
        <GoalIcon icon={icon} />
      </GoalCardIcon>
    </GoalCardStyled>
  );
};
