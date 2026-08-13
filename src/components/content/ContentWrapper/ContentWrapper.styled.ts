import styled from "styled-components";

export const ContentWrapperStyled = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidths.content};
  margin: 0 auto;
`;

export const ContentWrapperTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.s};
`;

export const ContentWrapperDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;
