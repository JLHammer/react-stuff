import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";

export const FaqPage = () => {
  return (
    <ContentWrapper
      title="FAQ"
      description="Ofte stillede spørgsmål om verdensmålene."
      showTitle={true}
    >
      <h2>Hvad er verdensmålene?</h2>
      <p>
        Verdensmålene er 17 mål for bæredygtig udvikling, som FN's medlemslande
        vedtog i 2015. Målene skal være nået inden 2030.
      </p>

      <h2>Hvem gælder målene for?</h2>
      <p>
        Målene gælder for alle lande — både rige og fattige. De forpligter både
        regeringer, virksomheder og den enkelte borger.
      </p>

      <h2>Hvad kan jeg selv gøre?</h2>
      <p>
        Du kan blandt andet sortere dit affald, spise mindre kød, købe færre nye
        ting og stemme til valg. Små handlinger betyder noget, når mange gør det
        samme.
      </p>
    </ContentWrapper>
  );
};
