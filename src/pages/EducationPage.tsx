import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { SubjectList } from "../components/organisms/SubjectList/SubjectList";

export const EducationPage = () => {
  return (
    <ContentWrapper
      title="Undervisning"
      description="Inspiration til undervisning i verdensmålene, fag for fag."
    >
      <p>
        Her finder du inspiration til din undervisning i form af introducerende
        øvelser, der kan bruges til at sætte verdensmålene i spil sammen med
        dine elever. Øvelserne er udarbejdet på baggrund af bogen “Bliver verden
        bedre” og kernestof i fagene.
      </p>

      <SubjectList />
    </ContentWrapper>
  );
};
