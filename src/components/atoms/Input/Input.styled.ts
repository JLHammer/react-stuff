import styled, { css } from "styled-components";
import { inputField } from "../../../styles/mixins";
import type { InputStyledProps } from "./Input.types";

const errorState = css<InputStyledProps>`
  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      border-color: ${theme.colors.required};
      outline-color: ${theme.colors.required};
    `}
`;

export const InputStyled = styled.input<InputStyledProps>`
  ${inputField}
  height: ${({ theme }) => theme.sizes.inputHeight};
  ${errorState}
`;

export const TextareaStyled = styled.textarea<InputStyledProps>`
  ${inputField}
  height: ${({ theme }) => theme.sizes.textareaHeight};
  padding-top: 5px;
  padding-bottom: 5px;
  resize: vertical;
  ${errorState}
`;
