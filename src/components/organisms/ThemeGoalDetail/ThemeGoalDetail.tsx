import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import type { ThemeGoalDetailData } from "../../../data/themes.types";
import type { ThemeGoalParams } from "./ThemeGoalDetail.types";
import {
  ThemeGoalDetailStyled,
  ThemeGoalDetailTitle,
  ThemeGoalDetailText,
  ThemeGoalDetailStatus,
  ThemeGoalDetailBack,
} from "./ThemeGoalDetail.styled";

const toParagraphs = (description: string) => description.split("\n\n");

export const ThemeGoalDetail = () => {
  const { themeSlug, goalId } = useParams<ThemeGoalParams>();
  const [goal, setGoal] = useState<ThemeGoalDetailData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGoal = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(
          `http://localhost:4000/api/goals/${goalId}`,
        );

        if (!response.ok) {
          throw new Error(`Serveren svarede med ${response.status}`);
        }

        const data: ThemeGoalDetailData = await response.json();

        setGoal(data);
      } catch (caught) {
        setError("Vi kunne ikke hente målet lige nu. Prøv igen senere.");
        console.error(caught);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoal();
  }, [goalId]);

  return (
    <ThemeGoalDetailStyled aria-label="Detaljer om verdensmålet">
      {isLoading && (
        <ThemeGoalDetailStatus role="status">
          Henter målet …
        </ThemeGoalDetailStatus>
      )}

      {error && (
        <ThemeGoalDetailStatus role="alert">{error}</ThemeGoalDetailStatus>
      )}

      {goal && (
        <>
          <ThemeGoalDetailTitle>{goal.byline}</ThemeGoalDetailTitle>
          <ThemeGoalDetailText>
            {toParagraphs(goal.description).map((paragraph, index) => (
              <p key={index}>{parse(paragraph)}</p>
            ))}
          </ThemeGoalDetailText>
        </>
      )}

      <ThemeGoalDetailBack to={`/temaer/${themeSlug}`}>
        &larr; Tilbage til målene
      </ThemeGoalDetailBack>
    </ThemeGoalDetailStyled>
  );
};
