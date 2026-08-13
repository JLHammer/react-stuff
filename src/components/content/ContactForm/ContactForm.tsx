import {
  ContactFormStyled,
  ContactFormLabel,
  ContactFormInput,
  ContactFormTextarea,
} from "./ContactForm.styled";

export const ContactForm = () => {
  return (
    <ContactFormStyled>
      <ContactFormLabel htmlFor="name">
        Navn
        <ContactFormInput id="name" name="name" type="text" required />
      </ContactFormLabel>

      <ContactFormLabel htmlFor="email">
        E-mail
        <ContactFormInput id="email" name="email" type="email" required />
      </ContactFormLabel>

      <ContactFormLabel htmlFor="message">
        Besked
        <ContactFormTextarea id="message" name="message" rows={6} required />
      </ContactFormLabel>

      <button type="submit">Send besked</button>
    </ContactFormStyled>
  );
};
