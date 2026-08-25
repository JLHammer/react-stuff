import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";

export const CustomGoalPage = () => {
  return (
    <ContentWrapper
      title="Byg dit eget mål"
      description="Design dit eget verdensmål, og fortæl hvad du synes verden mangler."
      showTitle={true}
    >
      <p>
        De 17 verdensmål dækker meget, men måske mangler der noget, som er
        vigtigt for netop dig. Her kan du give dit eget mål en titel, en farve og
        et ikon.
      </p>
      <p>
        Når du er færdig, kan du dele dit mål med din klasse og sammenligne det
        med de officielle mål.
      </p>
    </ContentWrapper>
  );
};
