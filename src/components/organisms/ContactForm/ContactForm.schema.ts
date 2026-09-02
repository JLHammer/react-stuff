import { z } from "zod";

const phonePattern = /^(\+45\s?)?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Navn skal være mindst 2 tegn."),
  email: z.email("Skriv en gyldig email, fx navn@eksempel.dk."),
  phone: z
    .string()
    .trim()
    .refine(
      (value) => value === "" || phonePattern.test(value),
      "Skriv et dansk telefonnummer, fx 12 34 56 78.",
    ),
  message: z
    .string()
    .trim()
    .min(10, "Beskeden skal være mindst 10 tegn.")
    .max(500, "Beskeden må højst være 500 tegn."),
});
