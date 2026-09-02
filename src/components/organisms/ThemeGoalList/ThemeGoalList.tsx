import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import type { ThemeData, ThemeGoalData } from "../../../data/themes.types";
import type { ThemeParams } from "./ThemeGoalList.types";
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
  const [goals, setGoals] = useState<ThemeGoalData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const activeTheme = themes.find((item) => item.slug === themeSlug);

  useEffect(() => {
    const fetchGoals = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(
          `http://localhost:4000/api/goals/bytheme/${themeSlug}`,
        );

        if (!response.ok) {
          throw new Error(`Serveren svarede med ${response.status}`);
        }

        const data: ThemeGoalData[] = await response.json();

        setGoals(data);
      } catch (caught) {
        setError("Vi kunne ikke hente målene lige nu. Prøv igen senere.");
        console.error(caught);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoals();
  }, [themeSlug]);

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
