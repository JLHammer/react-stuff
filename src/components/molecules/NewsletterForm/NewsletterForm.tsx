import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  NewsletterFormStyled,
  NewsletterInput,
  NewsletterButton,
  NewsletterStatus,
} from "./NewsletterForm.styled";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus(`Tak! Vi har tilmeldt ${email} til nyhedsbrevet.`);
    setEmail("");
  };

  return (
    <>
      <NewsletterFormStyled onSubmit={handleSubmit}>
        <NewsletterInput
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="Indtast din email"
          aria-label="Indtast din email"
          value={email}
          onChange={handleChange}
          required
        />
        <NewsletterButton type="submit">Tilmeld</NewsletterButton>
      </NewsletterFormStyled>

      {status && <NewsletterStatus>{status}</NewsletterStatus>}
    </>
  );
};
