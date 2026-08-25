import styled from "styled-components";
import { inputField } from "../../../styles/mixins";

export const InputStyled = styled.input`
  ${inputField}
  height: ${({ theme }) => theme.sizes.inputHeight};
`;

export const TextareaStyled = styled.textarea`
  ${inputField}
  height: ${({ theme }) => theme.sizes.textareaHeight};
  padding-top: 5px;
  padding-bottom: 5px;
  resize: vertical;
`;
