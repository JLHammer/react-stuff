import {
  ContactFormStyled,
  ContactFormLabel,
  RequiredMark,
  ContactFormInput,
  ContactFormTextarea,
  ContactFormButton,
} from "./ContactForm.styled";

export const ContactForm = () => {
  return (
    <ContactFormStyled>
      <ContactFormLabel htmlFor="name">
        Navn:<RequiredMark>*</RequiredMark>
      </ContactFormLabel>
      <ContactFormInput
        id="name"
        name="name"
        type="text"
        placeholder="Indtast dit navn"
        required
      />

      <ContactFormLabel htmlFor="email">
        Email:<RequiredMark>*</RequiredMark>
      </ContactFormLabel>
      <ContactFormInput
        id="email"
        name="email"
        type="email"
        placeholder="Indtast din email"
        required
      />

      <ContactFormLabel htmlFor="message">
        Besked:<RequiredMark>*</RequiredMark>
      </ContactFormLabel>
      <ContactFormTextarea
        id="message"
        name="message"
        rows={5}
        placeholder="Indtast din besked"
        required
      />

      <ContactFormButton type="submit">Send</ContactFormButton>
    </ContactFormStyled>
  );
};
