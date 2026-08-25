import { NavLink } from "react-router-dom";
import { ContentWrapper } from "../components/content/ContentWrapper/ContentWrapper";

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
        <NavLink to="/" end>
          Gå tilbage til forsiden
        </NavLink>
      </p>
    </ContentWrapper>
  );
};
