import { ContentWrapper } from "../components/content/ContentWrapper/ContentWrapper";
import { ContactForm } from "../components/content/ContactForm/ContactForm";

export const ContactPage = () => {
  return (
    <ContentWrapper
      title="Kontakt os"
      description="Udfyld og send formularen og vi vil hurtigst muligt besvare dine spørgsmål."
      showTitle={true}
    >
      <p>
        Udfyld og send formularen og vi vil hurtigst muligt besvare dine
        spørgsmål.
      </p>
      <ContactForm />
    </ContentWrapper>
  );
};
