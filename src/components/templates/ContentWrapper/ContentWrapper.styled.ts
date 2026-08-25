import styled from "styled-components";

export const ContentWrapperStyled = styled.div`
  width: 100%;
`;

export const ContentWrapperTitleBar = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.m};
`;

export const ContentWrapperTitle = styled.h1`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidths.content};
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-transform: uppercase;
`;

export const ContentWrapperContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidths.content};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.m};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;
