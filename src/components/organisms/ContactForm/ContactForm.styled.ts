import styled from "styled-components";
import { formActions, formColumn, statusText } from "../../../styles/mixins";

export const ContactFormStyled = styled.form`
  ${formColumn}
`;

export const ContactFormActions = styled.div`
  ${formActions}
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const ContactFormStatus = styled.p`
  ${statusText}
`;
