import { useParams, Link } from "react-router-dom";
import { goals } from "../data/sdg";
import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { GoalDetail } from "../components/organisms/GoalDetail/GoalDetail";
import { GoalNavigation } from "../components/molecules/GoalNavigation/GoalNavigation";
import { GoalOverview } from "../components/organisms/GoalOverview/GoalOverview";

export const GoalDetailsPage = () => {
  const { id } = useParams();

  const goalIndex = goals.findIndex((goal) => goal.id === id);
  const goal = goals[goalIndex];

  if (!goal) {
    return (
      <ContentWrapper
        title="Målet findes ikke"
        description="Verdensmålet, du prøvede at åbne, findes ikke."
        showTitle={true}
      >
        <h2>Vi kunne ikke finde verdensmål {id}</h2>
        <p>
          Der findes 17 verdensmål, og adressen peger på et mål uden for den
          række. Vælg et af målene herunder, eller{" "}
          <Link to="/">gå tilbage til forsiden</Link>.
        </p>
        <GoalOverview />
      </ContentWrapper>
    );
  }

  const previousGoal = goals[goalIndex - 1] ?? null;
  const nextGoal = goals[goalIndex + 1] ?? null;

  return (
    <ContentWrapper
      title={`Mål ${goal.id}: ${goal.title}`}
      description={goal.byline}
      showTitle={true}
    >
      <GoalDetail goal={goal} />
      <GoalNavigation previousGoal={previousGoal} nextGoal={nextGoal} />
      <GoalOverview />
    </ContentWrapper>
  );
};
