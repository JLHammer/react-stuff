import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import type {
  GoalData,
  GoalDetailData,
  GoalListData,
} from "../data/goals.types";
import type { GoalNavItem } from "../components/molecules/GoalNav/GoalNav.types";
import { useFetch } from "../hooks/useFetch";
import { toHexColor } from "../utils/color";
import { toEmbedUrl } from "../utils/video";
import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { Article } from "../components/molecules/Article/Article";
import { GoalDetail } from "../components/organisms/GoalDetail/GoalDetail";
import { GoalNav } from "../components/molecules/GoalNav/GoalNav";
import { GoalList } from "../components/organisms/GoalList/GoalList";

const url = "http://localhost:4000/api/goals";

const toGoal = (goal: GoalDetailData): GoalData => ({
  id: String(goal.id),
  title: goal.title,
  byline: goal.byline,
  description: goal.description,
  color: toHexColor(goal.color),
  icon: goal.icon,
  videoUrl: toEmbedUrl(goal.video_url),
});

const toNavItem = (goal: GoalListData): GoalNavItem => ({
  id: String(goal.id),
  title: goal.title,
  color: toHexColor(goal.color),
  icon: goal.icon,
});

export const GoalDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch<GoalDetailData>(`${url}/${id}`);
  const { data: allGoals } = useFetch<GoalListData[]>(url);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (isLoading) {
    return (
      <ContentWrapper
        title="Henter verdensmålet"
        description="Vent et øjeblik, mens vi henter målet."
      >
        <p role="status">Henter verdensmålet …</p>
      </ContentWrapper>
    );
  }

  if (error || !data) {
    return (
      <>
        <ContentWrapper
          title="Målet kan ikke vises"
          description="Verdensmålet, du prøvede at åbne, kunne ikke hentes."
        >
          <Article title={`Vi kunne ikke vise verdensmål ${id}`}>
            <p>
              Enten findes målet ikke, eller også kunne vi ikke få fat i
              serveren lige nu. Der findes 17 verdensmål – vælg et af dem
              herunder, eller <Link to="/">gå tilbage til forsiden</Link>.
            </p>
          </Article>
        </ContentWrapper>

        <GoalList />
      </>
    );
  }

  const goal = toGoal(data);
  const goals = allGoals ?? [];
  const index = goals.findIndex((item) => item.id === data.id);
  const previous =
    index === -1 ? null : goals[(index - 1 + goals.length) % goals.length];
  const next = index === -1 ? null : goals[(index + 1) % goals.length];

  return (
    <>
      <ContentWrapper
        title={`Mål ${goal.id}: ${goal.title}`}
        description={goal.byline}
        color={goal.color}
        icon={goal.icon}
      >
        <GoalDetail goal={goal} />
        {previous && next && (
          <GoalNav previous={toNavItem(previous)} next={toNavItem(next)} />
        )}
      </ContentWrapper>

      <GoalList />
    </>
  );
};
