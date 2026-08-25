import styled from "styled-components";
import { media } from "../../../styles/mixins";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: calc(
    ${({ theme }) => theme.sizes.labelWidth} + ${({ theme }) => theme.spacing.s} +
      ${({ theme }) => theme.sizes.inputWidth}
  );

  ${media("mobile")} {
    max-width: 100%;
  }
`;

export const FormStatus = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
