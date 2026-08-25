import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
`;

// The logo/navbar row that sits below the top bar.
export const HeaderRowStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.s};
`;
