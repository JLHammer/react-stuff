import styled from "styled-components";
import { formActions, formColumn, statusText } from "../../../styles/mixins";

export const LoginFormStyled = styled.form`
  ${formColumn}
`;

export const LoginFormActions = styled.div`
  ${formActions}
`;

export const LoginFormStatus = styled.p`
  ${statusText}
`;
