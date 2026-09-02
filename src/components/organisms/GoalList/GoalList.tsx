import { useId } from "react";
import type { GoalListData } from "../../../data/goals.types";
import { useFetch } from "../../../hooks/useFetch";
import { toHexColor } from "../../../utils/color";
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

const url = "http://localhost:4000/api/goals";

export const GoalList = () => {
  const titleId = useId();
  const { data, isLoading, error } = useFetch<GoalListData[]>(url);

  const goals = data ?? [];

  return (
    <GoalListStyled aria-labelledby={titleId}>
      <GoalListInner>
        <GoalListTitle id={titleId}>
          FN's 17 verdensmål for bæredygtig udvikling
        </GoalListTitle>
        <GoalListDivider aria-hidden="true" />

        {isLoading && <p role="status">Henter verdensmål …</p>}

        {error && <p role="alert">{error}</p>}

        {!isLoading && !error && goals.length === 0 && (
          <p>Der er ingen verdensmål at vise</p>
        )}

        {goals.length > 0 && (
          <GoalGrid>
            {goals.map((goal) => (
              <GoalCard
                key={goal.id}
                id={String(goal.id)}
                title={goal.title}
                color={toHexColor(goal.color)}
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
