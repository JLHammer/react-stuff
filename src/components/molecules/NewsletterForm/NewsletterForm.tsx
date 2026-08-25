import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { isEmail, isFilled } from "../../../utils/validation";
import { Input } from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";
import {
  NewsletterFormStyled,
  NewsletterField,
  NewsletterAction,
  NewsletterError,
  NewsletterStatus,
} from "./NewsletterForm.styled";

const errorId = "newsletter-email-error";

const validate = (email: string) => {
  if (!isFilled(email)) {
    return "Skriv din email.";
  }

  if (!isEmail(email)) {
    return "Skriv en gyldig email, fx navn@eksempel.dk.";
  }

  return "";
};

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const nextEmail = event.target.value;

    setEmail(nextEmail);

    if (error) {
      setError(validate(nextEmail));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextError = validate(email);

    setError(nextError);

    if (nextError) {
      setStatus("");
      return;
    }

    setStatus(`Tak! Vi har tilmeldt ${email} til nyhedsbrevet.`);
    setEmail("");
  };

  return (
    <>
      <NewsletterFormStyled onSubmit={handleSubmit} noValidate>
        <NewsletterField>
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            placeholder="Indtast din email"
            ariaLabel="Indtast din email"
            value={email}
            onChange={handleChange}
            hasError={Boolean(error)}
            describedBy={error ? errorId : undefined}
            required
          />
          {error && (
            <NewsletterError id={errorId} role="alert">
              {error}
            </NewsletterError>
          )}
        </NewsletterField>
        <NewsletterAction>
          <Button type="submit" label="Tilmeld" />
        </NewsletterAction>
      </NewsletterFormStyled>

      {status && <NewsletterStatus role="status">{status}</NewsletterStatus>}
    </>
  );
};
