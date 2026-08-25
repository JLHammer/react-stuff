import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { LoginFormValues } from "./LoginForm.types";
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

export const LoginForm = () => {
  const [values, setValues] = useState<LoginFormValues>(emptyValues);
  const [status, setStatus] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus(`Vi forsøger at logge ${values.email} ind.`);
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <FormField
          id="login-email"
          name="email"
          type="email"
          label="Email"
          placeholder="Indtast din email"
          value={values.email}
          onChange={handleChange}
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
