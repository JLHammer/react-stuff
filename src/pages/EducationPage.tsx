import { ContentWrapper } from "../components/content/ContentWrapper/ContentWrapper";

export const EducationPage = () => {
  return (
    <ContentWrapper
      title="Undervisning"
      description="Undervisningsmateriale om verdensmålene til grundskolen og ungdomsuddannelserne."
      showTitle={true}
    >
      <p>
        Her finder du forløb, opgaver og videoer, som kan bruges direkte i
        undervisningen. Materialet er udviklet sammen med Globale Gymnasier og
        Mellemfolkeligt Samvirke.
      </p>
      <p>
        Hvert forløb tager udgangspunkt i et enkelt verdensmål og lægger op til,
        at eleverne selv undersøger, hvordan målet hænger sammen med deres egen
        hverdag.
      </p>
    </ContentWrapper>
  );
};
