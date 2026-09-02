import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "./ContactForm.schema";
import type { ContactFormValues } from "./ContactForm.types";
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
  phone: "",
  message: "",
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: emptyValues,
  });
  const [status, setStatus] = useState("");

  const onSubmit = (values: ContactFormValues) => {
    console.log(values);

    setStatus(
      `Tak for din besked, ${values.name} - vi vender tilbage hurtigst muligt.`,
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
          registration={register("name")}
          error={errors.name?.message}
          required
        />
        <FormField
          id="email"
          type="email"
          label="Email"
          placeholder="Indtast din email"
          registration={register("email")}
          error={errors.email?.message}
          required
        />
        <FormField
          id="phone"
          label="Telefon"
          placeholder="Indtast dit telefonnummer"
          registration={register("phone")}
          error={errors.phone?.message}
          hint="Valgfrit - fx 12 34 56 78 eller +45 12 34 56 78."
        />
        <FormField
          id="message"
          label="Besked"
          placeholder="Indtast din besked"
          registration={register("message")}
          error={errors.message?.message}
          hint="Mellem 10 og 500 tegn."
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
