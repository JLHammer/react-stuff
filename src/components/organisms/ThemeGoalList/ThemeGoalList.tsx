import { useOutletContext, useParams } from "react-router-dom";
import type { ThemeData, ThemeGoalData } from "../../../data/themes.types";
import type { ThemeParams } from "./ThemeGoalList.types";
import { useFetch } from "../../../hooks/useFetch";
import { toHexColor } from "../../../utils/color";
import { GoalCard } from "../../molecules/GoalCard/GoalCard";
import {
  ThemeGoalListStyled,
  ThemeGoalListTitle,
  ThemeGoalListStatus,
  ThemeGoalGrid,
} from "./ThemeGoalList.styled";

export const ThemeGoalList = () => {
  const { themeSlug } = useParams<ThemeParams>();
  const themes = useOutletContext<ThemeData[]>();
  const { data, isLoading, error } = useFetch<ThemeGoalData[]>(
    `http://localhost:4000/api/goals/bytheme/${themeSlug}`,
  );

  const goals = data ?? [];
  const activeTheme = themes.find((item) => item.slug === themeSlug);

  return (
    <ThemeGoalListStyled aria-label="Verdensmål under det valgte tema">
      <ThemeGoalListTitle>
        Mål under temaet <em>{activeTheme?.title ?? themeSlug}</em>
      </ThemeGoalListTitle>

      {isLoading && (
        <ThemeGoalListStatus role="status">Henter mål …</ThemeGoalListStatus>
      )}

      {error && <ThemeGoalListStatus role="alert">{error}</ThemeGoalListStatus>}

      {!isLoading && !error && goals.length === 0 && (
        <ThemeGoalListStatus role="status">
          Der er ingen mål under dette tema
        </ThemeGoalListStatus>
      )}

      {goals.length > 0 && (
        <ThemeGoalGrid>
          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              id={String(goal.id)}
              title={goal.title}
              color={toHexColor(goal.color)}
              icon={goal.icon}
              to={`/temaer/${themeSlug}/${goal.id}`}
            />
          ))}
        </ThemeGoalGrid>
      )}
    </ThemeGoalListStyled>
  );
};
