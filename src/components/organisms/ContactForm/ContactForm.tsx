import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { ContactFormValues } from "./ContactForm.types";
import { FormField } from "../../molecules/FormField/FormField";
import { Button } from "../../atoms/Button/Button";
import { FormStyled, FormActions, FormStatus } from "./ContactForm.styled";

const emptyValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [status, setStatus] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("Tak for din besked - vi vender tilbage hurtigst muligt.");
    setValues(emptyValues);
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <FormField
          id="name"
          name="name"
          label="Navn"
          placeholder="Indtast dit navn"
          value={values.name}
          onChange={handleChange}
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
          required
        />
        <FormField
          id="message"
          name="message"
          label="Besked"
          placeholder="Indtast din besked"
          value={values.message}
          onChange={handleChange}
          rows={6}
          required
        />

        <FormActions>
          <Button type="submit" label="Send" />
        </FormActions>
      </FormStyled>

      {status && <FormStatus role="status">{status}</FormStatus>}
    </>
  );
};
