import styled from "styled-components";

export const LabelStyled = styled.label`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text};
`;

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.required};
`;
