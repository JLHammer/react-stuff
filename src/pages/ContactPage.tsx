import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { Article } from "../components/molecules/Article/Article";
import { ContactForm } from "../components/organisms/ContactForm/ContactForm";

export const ContactPage = () => {
  return (
    <ContentWrapper
      title="Kontakt os"
      description="Udfyld og send formularen og vi vil hurtigst muligt besvare dine spørgsmål."
    >
      <Article
        paragraphs={[
          "Udfyld og send formularen og vi vil hurtigst muligt besvare dine spørgsmål.",
        ]}
      />

      <ContactForm />
    </ContentWrapper>
  );
};
