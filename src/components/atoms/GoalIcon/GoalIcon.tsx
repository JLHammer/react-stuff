import parse from "html-react-parser";
import type { GoalIconProps } from "./GoalIcon.types";

export const GoalIcon = ({ icon }: GoalIconProps) => {
  return <>{parse(icon)}</>;
};
