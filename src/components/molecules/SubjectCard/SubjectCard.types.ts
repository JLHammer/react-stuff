import type { SubjectData } from "../../../data/subjects.types";

export type SubjectCardProps = Pick<SubjectData, "name" | "color">;

export type SubjectCardStyledProps = {
  $color: string;
};
