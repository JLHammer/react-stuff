import type { GoalData } from "../../../data/goals.types";

export type GoalCardProps = Pick<GoalData, "id" | "title" | "color" | "icon">;

export type GoalCardStyledProps = {
  $color: string;
};
