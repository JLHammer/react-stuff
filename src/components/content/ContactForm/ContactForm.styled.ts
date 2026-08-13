import styled from "styled-components";

export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
  max-width: 32rem;
`;

export const ContactFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const ContactFormInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.s};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

export const ContactFormTextarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.s};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.m};
  resize: vertical;
`;
