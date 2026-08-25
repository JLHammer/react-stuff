import styled from "styled-components";

export const NewsletterFormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

export const NewsletterField = styled.div`
  flex: 1 1 18rem;
  max-width: ${({ theme }) => theme.sizes.inputWidth};
`;

export const NewsletterStatus = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
