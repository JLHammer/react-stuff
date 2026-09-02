import { useRef, useState } from "react";
import type { FormEvent } from "react";
import type { ContactFormErrors, ContactFormValues } from "./ContactForm.types";
import { hasErrors, isEmail, isFilled } from "../../../utils/validation";
import { FormField } from "../../molecules/FormField/FormField";
import { Button } from "../../atoms/Button/Button";
import {
  ContactFormStyled,
  ContactFormActions,
  ContactFormStatus,
} from "./ContactForm.styled";

// Felterne er uncontrolled, så værdierne læses direkte fra formularen.
const readValues = (form: HTMLFormElement): ContactFormValues => {
  const data = new FormData(form);

  return {
    name: String(data.get("name") ?? ""),
    email: String(data.get("email") ?? ""),
    message: String(data.get("message") ?? ""),
  };
};

const validate = (values: ContactFormValues): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (!isFilled(values.name)) {
    errors.name = "Skriv dit navn.";
  }

  if (!isFilled(values.email)) {
    errors.email = "Skriv din email.";
  } else if (!isEmail(values.email)) {
    errors.email = "Skriv en gyldig email, fx navn@eksempel.dk.";
  }

  if (!isFilled(values.message)) {
    errors.message = "Skriv en besked.";
  }

  return errors;
};

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState("");

  const handleInput = (event: FormEvent<HTMLFormElement>) => {
    if (!hasErrors(errors)) {
      return;
    }

    setErrors(validate(readValues(event.currentTarget)));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const values = readValues(event.currentTarget);
    const nextErrors = validate(values);

    setErrors(nextErrors);

    if (hasErrors(nextErrors)) {
      setStatus("");
      return;
    }

    event.currentTarget.reset();
    setStatus(
      `Tak for din besked, ${values.name.trim()} - vi vender tilbage hurtigst muligt.`,
    );
  };

  const handleReset = () => {
    formRef.current?.reset();
    setErrors({});
    setStatus("");
  };

  return (
    <>
      <ContactFormStyled
        ref={formRef}
        onSubmit={handleSubmit}
        onInput={handleInput}
        noValidate
      >
        <FormField
          id="name"
          name="name"
          label="Navn"
          placeholder="Indtast dit navn"
          error={errors.name}
          required
        />
        <FormField
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Indtast din email"
          error={errors.email}
          required
        />
        <FormField
          id="message"
          name="message"
          label="Besked"
          placeholder="Indtast din besked"
          error={errors.message}
          rows={6}
          required
        />

        <ContactFormActions>
          <Button label="Nulstil" onClick={handleReset} />
          <Button type="submit" label="Send" />
        </ContactFormActions>
      </ContactFormStyled>

      {status && <ContactFormStatus role="status">{status}</ContactFormStatus>}
    </>
  );
};
