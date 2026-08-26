import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { goals } from "../data/goals";
import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { Article } from "../components/molecules/Article/Article";
import { GoalDetail } from "../components/organisms/GoalDetail/GoalDetail";
import { GoalNav } from "../components/molecules/GoalNav/GoalNav";
import { GoalList } from "../components/organisms/GoalList/GoalList";

export const GoalDetailsPage = () => {
  const { id } = useParams();

  const index = goals.findIndex((item) => item.id === id);
  const goal = goals[index];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!goal) {
    return (
      <>
        <ContentWrapper
          title="Målet findes ikke"
          description="Verdensmålet, du prøvede at åbne, findes ikke."
        >
          <Article title={`Vi kunne ikke finde verdensmål ${id}`}>
            <p>
              Der findes 17 verdensmål, og adressen peger på et mål uden for den
              række. Vælg et af målene herunder, eller{" "}
              <Link to="/">gå tilbage til forsiden</Link>.
            </p>
          </Article>
        </ContentWrapper>

        <GoalList />
      </>
    );
  }

  const previous = goals[(index - 1 + goals.length) % goals.length];
  const next = goals[(index + 1) % goals.length];

  return (
    <>
      <ContentWrapper
        title={`Mål ${goal.id}: ${goal.title}`}
        description={goal.byline}
        color={goal.color}
        icon={goal.icon}
      >
        <GoalDetail goal={goal} />
        <GoalNav previous={previous} next={next} />
      </ContentWrapper>

      <GoalList />
    </>
  );
};
