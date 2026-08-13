import styled from "styled-components";

export const ContentWrapperStyled = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidths.content};
  margin: 0 auto;
`;
