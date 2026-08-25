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
  border-color: ${({ theme }) => theme.colors.blueDark};
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.blueDark};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.blueDark};
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const NewsletterStatus = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
