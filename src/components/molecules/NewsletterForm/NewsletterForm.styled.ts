import styled from "styled-components";
import { fieldStack, statusText } from "../../../styles/mixins";

export const NewsletterFormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const NewsletterField = styled.div`
  ${fieldStack}
  flex: 1 1 18rem;
`;

export const NewsletterAction = styled.div`
  display: flex;
  align-items: center;
  min-height: ${({ theme }) => theme.sizes.inputHeight};
`;

export const NewsletterError = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const NewsletterStatus = styled.p`
  ${statusText}
`;
