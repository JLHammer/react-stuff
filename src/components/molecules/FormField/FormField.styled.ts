import styled from "styled-components";
import { fieldStack, media } from "../../../styles/mixins";

export const FormFieldStyled = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.s};

  label {
    flex: 0 0 ${({ theme }) => theme.sizes.labelWidth};
    padding-top: 6px;
  }

  ${media("mobile")} {
    flex-direction: column;
    gap: 0.25rem;

    label {
      flex: none;
      padding-top: 0;
    }
  }
`;

export const FormFieldControl = styled.div`
  ${fieldStack}
  flex: 1 1 ${({ theme }) => theme.sizes.inputWidth};
`;

export const FormFieldError = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.required};
`;

export const FormFieldHint = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.placeholder};
`;
