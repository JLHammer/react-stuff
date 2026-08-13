import styled from "styled-components";

export const ContentWrapperStyled = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidths.content};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;

export const ContentWrapperTitle = styled.h1`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.s};
  font-size: ${({ theme }) => theme.fontSizes.m};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
