import { useState } from "react";
import { useForm } from "react-hook-form";
import type { ContactFormValues } from "./ContactForm.types";
import { isEmail, isFilled } from "../../../utils/validation";
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

const validateName = (value: string) => isFilled(value) || "Skriv dit navn.";

const validateEmail = (value: string) => {
  if (!isFilled(value)) {
    return "Skriv din email.";
  }

  if (!isEmail(value)) {
    return "Skriv en gyldig email, fx navn@eksempel.dk.";
  }

  return true;
};

const validateMessage = (value: string) =>
  isFilled(value) || "Skriv en besked.";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ defaultValues: emptyValues });
  const [status, setStatus] = useState("");

  const onSubmit = (values: ContactFormValues) => {
    setStatus(
      `Tak for din besked, ${values.name.trim()} - vi vender tilbage hurtigst muligt.`,
    );
    reset();
  };

  const onInvalid = () => {
    setStatus("");
  };

  const handleReset = () => {
    reset();
    setStatus("");
  };

  return (
    <>
      <ContactFormStyled
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        noValidate
      >
        <FormField
          id="name"
          label="Navn"
          placeholder="Indtast dit navn"
          registration={register("name", { validate: validateName })}
          error={errors.name?.message}
          required
        />
        <FormField
          id="email"
          type="email"
          label="Email"
          placeholder="Indtast din email"
          registration={register("email", { validate: validateEmail })}
          error={errors.email?.message}
          required
        />
        <FormField
          id="message"
          label="Besked"
          placeholder="Indtast din besked"
          registration={register("message", { validate: validateMessage })}
          error={errors.message?.message}
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
