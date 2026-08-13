import { ContentWrapper } from "../components/content/ContentWrapper/ContentWrapper";

export const HomePage = () => {
  return (
    <ContentWrapper
      title="FN's Verdensmål"
      description="Læs om FN's 17 verdensmål for bæredygtig udvikling."
      showTitle={true}
    >
      <p>
        Verdensmålene består af 17 mål og 169 delmål, som forpligter alle FN's
        medlemslande til at afskaffe fattigdom og sult, reducere ulighed, sikre
        god uddannelse og bedre sundhed til alle samt bekæmpe klimaforandringer
        inden 2030.
      </p>
      <p>
        Målene hænger sammen på tværs, og fremskridt på ét mål gør det lettere
        at nå de øvrige. Her på siden kan du læse om hvert enkelt mål, finde
        undervisningsmateriale og bygge dit eget verdensmål.
      </p>
    </ContentWrapper>
  );
};
