import styled from "styled-components";

export const NewsletterFormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const NewsletterField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1 1 18rem;
  max-width: ${({ theme }) => theme.sizes.inputWidth};
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
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
