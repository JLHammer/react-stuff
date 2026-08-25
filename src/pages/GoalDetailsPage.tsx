import { useParams, Link } from "react-router-dom";
import { goals } from "../data/goals";
import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { Article } from "../components/molecules/Article/Article";
import { GoalDetail } from "../components/organisms/GoalDetail/GoalDetail";
import { GoalList } from "../components/organisms/GoalList/GoalList";

export const GoalDetailsPage = () => {
  const { id } = useParams();

  const goal = goals.find((item) => item.id === id);

  if (!goal) {
    return (
      <>
        <ContentWrapper
          title="Målet findes ikke"
          description="Verdensmålet, du prøvede at åbne, findes ikke."
        >
          <Article title={`Vi kunne ikke finde verdensmål ${id}`} />
          <p>
            Der findes 17 verdensmål, og adressen peger på et mål uden for den
            række. Vælg et af målene herunder, eller{" "}
            <Link to="/">gå tilbage til forsiden</Link>.
          </p>
        </ContentWrapper>

        <GoalList />
      </>
    );
  }

  return (
    <>
      <ContentWrapper
        title={`Mål ${goal.id}: ${goal.title}`}
        description={goal.byline}
      >
        <GoalDetail goal={goal} />
      </ContentWrapper>

      <GoalList />
    </>
  );
};
