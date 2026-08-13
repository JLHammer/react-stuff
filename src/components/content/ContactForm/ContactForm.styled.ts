import styled from "styled-components";

export const ContactFormStyled = styled.form`
  display: grid;
  grid-template-columns: max-content minmax(0, 24rem);
  gap: ${({ theme }) => theme.spacing.s};
  align-items: start;
`;

export const ContactFormLabel = styled.label`
  padding-top: 0.5rem;
`;

export const RequiredMark = styled.span`
  color: #e5243b;
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

export const ContactFormButton = styled.button`
  grid-column: 2;
  justify-self: end;
  padding: 0.5rem ${({ theme }) => theme.spacing.s};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.s};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  cursor: pointer;
`;
