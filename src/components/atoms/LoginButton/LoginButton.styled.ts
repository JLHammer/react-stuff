import styled from "styled-components";
import { labelText } from "../../../styled/Mixins.styled";

export const LoginButtonStyled = styled.button`
  ${labelText}
  background: none;
  padding: 0;
  color: inherit;
  font-family: inherit;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.blueDark};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
