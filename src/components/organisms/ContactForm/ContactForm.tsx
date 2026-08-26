import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { ContactFormErrors, ContactFormValues } from "./ContactForm.types";
import { hasErrors, isEmail, isFilled } from "../../../utils/validation";
import { FormField } from "../../molecules/FormField/FormField";
import { Button } from "../../atoms/Button/Button";
import {
  ContactFormStyled,
  ContactFormActions,
  ContactFormStatus,
} from "./ContactForm.styled";

const emptyValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
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
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };

    setValues(nextValues);

    if (hasErrors(errors)) {
      setErrors(validate(nextValues));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);

    setErrors(nextErrors);

    if (hasErrors(nextErrors)) {
      setStatus("");
      return;
    }

    setStatus("Tak for din besked - vi vender tilbage hurtigst muligt.");
    setValues(emptyValues);
  };

  return (
    <>
      <ContactFormStyled onSubmit={handleSubmit} noValidate>
        <FormField
          id="name"
          name="name"
          label="Navn"
          placeholder="Indtast dit navn"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <FormField
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Indtast din email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <FormField
          id="message"
          name="message"
          label="Besked"
          placeholder="Indtast din besked"
          value={values.message}
          onChange={handleChange}
          error={errors.message}
          rows={6}
          required
        />

        <ContactFormActions>
          <Button type="submit" label="Send" />
        </ContactFormActions>
      </ContactFormStyled>

      {status && <ContactFormStatus role="status">{status}</ContactFormStatus>}
    </>
  );
};
