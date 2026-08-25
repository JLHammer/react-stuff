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

export const ContactFormStatus = styled.p`
  grid-column: 2;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const ContactFormActions = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.s};
`;

export const ContactFormButton = styled.button`
  padding: 0.5rem ${({ theme }) => theme.spacing.s};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.s};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  cursor: pointer;
`;

export const ContactFormSummary = styled.section`
  max-width: 40rem;
  padding: ${({ theme }) => theme.spacing.s};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.m};
  box-shadow: ${({ theme }) => theme.shadows.s};
`;

export const ContactFormSummaryTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.s};
  font-size: ${({ theme }) => theme.fontSizes.l};
`;

export const ContactFormSummaryTerm = styled.dt`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const ContactFormSummaryDetail = styled.dd`
  margin: 0 0 ${({ theme }) => theme.spacing.s};
  white-space: pre-wrap;
`;
