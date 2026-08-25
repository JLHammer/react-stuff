import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { Article } from "../components/molecules/Article/Article";
import { GoalBuilder } from "../components/organisms/GoalBuilder/GoalBuilder";

export const CustomGoalPage = () => {
  return (
    <ContentWrapper
      title="Byg dit eget mål"
      description="Byg dit eget verdensmål med din egen måltekst og farvekode."
    >
      <Article
        paragraphs={[
          "Mangler der et mål? Med tekst feltet herunder kan du bygge dit eget mål og give det en bestemt farve.",
        ]}
      />

      <GoalBuilder />
    </ContentWrapper>
  );
};
