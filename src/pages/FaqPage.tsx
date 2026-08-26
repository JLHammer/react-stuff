import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { Article } from "../components/molecules/Article/Article";
import { faq } from "../data/faq";

export const FaqPage = () => {
  return (
    <ContentWrapper
      title="FAQ"
      description="Ofte stillede spørgsmål om FN's verdensmål for bæredygtig udvikling."
    >
      {faq.map((entry) => (
        <Article
          key={entry.id}
          title={entry.question}
          paragraphs={entry.answer}
        />
      ))}
    </ContentWrapper>
  );
};
