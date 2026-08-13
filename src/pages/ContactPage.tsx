import { ContentWrapper } from "../components/content/ContentWrapper/ContentWrapper";
import { ContactForm } from "../components/content/ContactForm/ContactForm";

export const ContactPage = () => {
  return (
    <ContentWrapper
      title="Kontakt os"
      description="Har du spørgsmål til verdensmålene eller til undervisningsmaterialet? Så skriv til os."
      showTitle={true}
    >
      <p>
        Vi svarer normalt inden for to hverdage. Du er også velkommen til at
        ringe på 12 34 56 78 mellem kl. 9 og 15.
      </p>
      <ContactForm />
    </ContentWrapper>
  );
};
