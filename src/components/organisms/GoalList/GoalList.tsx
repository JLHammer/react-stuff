import { useId } from "react";
import { goals } from "../../../data/goals";
import { GoalCard } from "../../molecules/GoalCard/GoalCard";
import {
  GoalListStyled,
  GoalListInner,
  GoalListTitle,
  GoalListDivider,
  GoalGrid,
  GoalListLogo,
} from "./GoalList.styled";

import verdensmaal from "../../../assets/images/verdensmaal.svg";

export const GoalList = () => {
  const titleId = useId();

  return (
    <GoalListStyled aria-labelledby={titleId}>
      <GoalListInner>
        <GoalListTitle id={titleId}>
          FN's 17 verdensmål for bæredygtig udvikling
        </GoalListTitle>
        <GoalListDivider aria-hidden="true" />

        {goals.length === 0 ? (
          <p>Der er ingen verdensmål at vise</p>
        ) : (
          <GoalGrid>
            {goals.map((goal) => (
              <GoalCard
                key={goal.id}
                id={goal.id}
                title={goal.title}
                color={goal.color}
                icon={goal.icon}
              />
            ))}
            <li aria-hidden="true">
              <GoalListLogo src={verdensmaal} alt="" />
            </li>
          </GoalGrid>
        )}
      </GoalListInner>
    </GoalListStyled>
  );
};
