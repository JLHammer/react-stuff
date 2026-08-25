import styled from "styled-components";

export const UnorderedListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.m};
`;
