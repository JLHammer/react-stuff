import type { GoalData } from "../../../data/goals.types";

export type GoalNavItem = Pick<GoalData, "id" | "title" | "color" | "icon">;

export type GoalNavProps = {
  previous: GoalNavItem;
  next: GoalNavItem;
};

export type GoalNavLinkStyledProps = {
  $color: string;
  $align?: "start" | "end";
};
