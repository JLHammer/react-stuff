import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { LoginFormErrors, LoginFormValues } from "./LoginForm.types";
import { hasErrors, isEmail, isFilled } from "../../../utils/validation";
import { FormField } from "../../molecules/FormField/FormField";
import { Button } from "../../atoms/Button/Button";
import {
  FormStyled,
  FormActions,
  FormStatus,
} from "../ContactForm/ContactForm.styled";

const emptyValues: LoginFormValues = {
  email: "",
  password: "",
};

const validate = (values: LoginFormValues): LoginFormErrors => {
  const errors: LoginFormErrors = {};

  if (!isFilled(values.email)) {
    errors.email = "Skriv din email.";
  } else if (!isEmail(values.email)) {
    errors.email = "Skriv en gyldig email, fx navn@eksempel.dk.";
  }

  if (!isFilled(values.password)) {
    errors.password = "Skriv din adgangskode.";
  }

  return errors;
};

export const LoginForm = () => {
  const [values, setValues] = useState<LoginFormValues>(emptyValues);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [status, setStatus] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

    setStatus(`Du er nu logget ind!`);
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit} noValidate>
        <FormField
          id="login-email"
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
          id="login-password"
          name="password"
          type="password"
          label="Adgangskode"
          placeholder="Indtast din adgangskode"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          required
        />

        <FormActions>
          <Button type="submit" label="Login" />
        </FormActions>
      </FormStyled>

      {status && <FormStatus role="status">{status}</FormStatus>}
    </>
  );
};
