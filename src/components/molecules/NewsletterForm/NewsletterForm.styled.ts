import styled from "styled-components";
import { flexRowCenter, formControl } from "../../../styled/Mixins.styled";

export const NewsletterFormStyled = styled.form`
  ${flexRowCenter("s")}
`;

export const NewsletterInput = styled.input`
  ${formControl}
  flex: 1 1 18rem;
  max-width: 22rem;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const NewsletterButton = styled.button`
  ${formControl}
  padding: 0.5rem ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.s};
  cursor: pointer;
`;

export const NewsletterStatus = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
