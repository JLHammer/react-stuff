import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import type { ThemeGoalDetailData } from "../../../data/themes.types";
import type { ThemeGoalParams } from "./ThemeGoalDetail.types";
import { useFetch } from "../../../hooks/useFetch";
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
  const {
    data: goal,
    isLoading,
    error,
  } = useFetch<ThemeGoalDetailData>(
    `http://localhost:4000/api/goals/${goalId}`,
  );

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
