import { Link } from "react-router-dom";
import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { Article } from "../components/molecules/Article/Article";

export const ErrorPage = () => {
  return (
    <ContentWrapper
      title="Siden findes ikke"
      description="Adressen findes ikke på Verdensmålene.dk."
    >
      <Article
        title="404 - vi kunne ikke finde siden"
        paragraphs={[
          "Adressen, du prøvede at åbne, findes ikke. Måske er linket forældet, eller også er der sneget sig en stavefejl ind i adressen.",
        ]}
      >
        <p>
          <Link to="/">Gå tilbage til forsiden</Link>
        </p>
      </Article>
    </ContentWrapper>
  );
};
