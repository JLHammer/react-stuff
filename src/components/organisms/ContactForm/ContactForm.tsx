import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { ContactFormValues } from "../../../types/types";
import {
  ContactFormStyled,
  ContactFormLabel,
  RequiredMark,
  ContactFormInput,
  ContactFormTextarea,
  ContactFormActions,
  ContactFormButton,
  ContactFormStatus,
  ContactFormSummary,
  ContactFormSummaryTitle,
  ContactFormSummaryTerm,
  ContactFormSummaryDetail,
} from "./ContactForm.styled";

const emptyValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [submittedValues, setSubmittedValues] =
    useState<ContactFormValues | null>(null);
  const [status, setStatus] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmittedValues(values);
    setStatus("Tak for din besked - vi vender tilbage hurtigst muligt.");
  };

  const handleClick = () => {
    setValues(emptyValues);
    setSubmittedValues(null);
    setStatus("Felterne er ryddet.");
  };

  return (
    <>
      <ContactFormStyled onSubmit={handleSubmit}>
        <ContactFormLabel htmlFor="name">
          Navn:<RequiredMark>*</RequiredMark>
        </ContactFormLabel>
        <ContactFormInput
          id="name"
          name="name"
          type="text"
          placeholder="Indtast dit navn"
          value={values.name}
          onChange={handleChange}
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
          value={values.email}
          onChange={handleChange}
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
          value={values.message}
          onChange={handleChange}
          required
        />

        <ContactFormStatus>
          Du skriver: {values.message || "(ingen besked endnu)"}
        </ContactFormStatus>

        <ContactFormActions>
          <ContactFormButton type="button" onClick={handleClick}>
            Ryd felter
          </ContactFormButton>
          <ContactFormButton type="submit">Send</ContactFormButton>
        </ContactFormActions>
      </ContactFormStyled>

      {status && <p>{status}</p>}

      {submittedValues && (
        <ContactFormSummary>
          <ContactFormSummaryTitle>Din henvendelse</ContactFormSummaryTitle>
          <dl>
            <ContactFormSummaryTerm>Navn</ContactFormSummaryTerm>
            <ContactFormSummaryDetail>
              {submittedValues.name}
            </ContactFormSummaryDetail>

            <ContactFormSummaryTerm>Email</ContactFormSummaryTerm>
            <ContactFormSummaryDetail>
              {submittedValues.email}
            </ContactFormSummaryDetail>

            <ContactFormSummaryTerm>Besked</ContactFormSummaryTerm>
            <ContactFormSummaryDetail>
              {submittedValues.message}
            </ContactFormSummaryDetail>
          </dl>
        </ContactFormSummary>
      )}
    </>
  );
};
