import styled from "styled-components";
import { media } from "../../../styles/mixins";

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
  flex: 1 1 ${({ theme }) => theme.sizes.inputWidth};
  max-width: ${({ theme }) => theme.sizes.inputWidth};
`;
