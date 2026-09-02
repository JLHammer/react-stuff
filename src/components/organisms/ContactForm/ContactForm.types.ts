import type { z } from "zod";
import type { contactFormSchema } from "./ContactForm.schema";

export type ContactFormValues = z.infer<typeof contactFormSchema>;
