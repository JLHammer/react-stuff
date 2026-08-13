import { ContentWrapper } from "../components/content/ContentWrapper/ContentWrapper";
import { NavigationLink } from "../components/content/NavigationLink/NavigationLink";

export const NoPage = () => {
  return (
    <ContentWrapper
      title="Siden findes ikke"
      description="Adressen findes ikke på Verdensmålene.dk."
      showTitle={true}
    >
      <h2>404 - vi kunne ikke finde siden</h2>
      <p>
        Adressen, du prøvede at åbne, findes ikke. Måske er linket forældet,
        eller også er der sneget sig en stavefejl ind i adressen.
      </p>
      <p>
        <NavigationLink to="/">Gå tilbage til forsiden</NavigationLink>
      </p>
    </ContentWrapper>
  );
};
