import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Input } from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";
import {
  NewsletterFormStyled,
  NewsletterField,
  NewsletterStatus,
} from "./NewsletterForm.styled";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        <NewsletterField>
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            placeholder="Indtast din email"
            ariaLabel="Indtast din email"
            value={email}
            onChange={handleChange}
            required
          />
        </NewsletterField>
        <Button type="submit" label="Tilmeld" />
      </NewsletterFormStyled>

      {status && <NewsletterStatus>{status}</NewsletterStatus>}
    </>
  );
};
