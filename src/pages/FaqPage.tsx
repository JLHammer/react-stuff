import type { FaqEntry } from "../data/faq.types";
import { useFetch } from "../hooks/useFetch";
import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { Article } from "../components/molecules/Article/Article";

const url = "http://localhost:4000/api/faq";

export const FaqPage = () => {
  const { data, isLoading, error } = useFetch<FaqEntry[]>(url);

  const faq = data ?? [];

  return (
    <ContentWrapper
      title="FAQ"
      description="Ofte stillede spørgsmål om FN's verdensmål for bæredygtig udvikling."
    >
      {isLoading && <p role="status">Henter spørgsmål …</p>}

      {error && <p role="alert">{error}</p>}

      {faq.map((entry) => (
        <Article
          key={entry.id}
          title={entry.title}
          paragraphs={[entry.context]}
        />
      ))}
    </ContentWrapper>
  );
};
