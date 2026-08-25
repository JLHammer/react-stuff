import type { GoalNavigationProps } from "../../../types/types";
import {
  GoalNavigationStyled,
  GoalNavigationLink,
  GoalNavigationSpacer,
} from "./GoalNavigation.styled";

export const GoalNavigation = ({
  previousGoal,
  nextGoal,
}: GoalNavigationProps) => {
  return (
    <GoalNavigationStyled aria-label="Naviger mellem verdensmålene">
      {previousGoal ? (
        <GoalNavigationLink to={`/maal/${previousGoal.id}`}>
          &larr; Mål {previousGoal.id}: {previousGoal.title}
        </GoalNavigationLink>
      ) : (
        <GoalNavigationSpacer />
      )}

      <GoalNavigationLink to="/">Alle verdensmål</GoalNavigationLink>

      {nextGoal ? (
        <GoalNavigationLink to={`/maal/${nextGoal.id}`}>
          Mål {nextGoal.id}: {nextGoal.title} &rarr;
        </GoalNavigationLink>
      ) : (
        <GoalNavigationSpacer />
      )}
    </GoalNavigationStyled>
  );
};
