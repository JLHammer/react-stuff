import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { ContactForm } from "../components/organisms/ContactForm/ContactForm";

export const ContactPage = () => {
  return (
    <ContentWrapper
      title="Kontakt os"
      description="Udfyld og send formularen og vi vil hurtigst muligt besvare dine spørgsmål."
    >
      <p>
        Udfyld og send formularen og vi vil hurtigst muligt besvare dine
        spørgsmål.
      </p>

      <ContactForm />
    </ContentWrapper>
  );
};
