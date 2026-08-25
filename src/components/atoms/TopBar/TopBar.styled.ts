import styled from "styled-components";

export const TopBarStyled = styled.div`
  height: ${({ theme }) => theme.sizes.topBarHeight};
  background-color: ${({ theme }) => theme.colors.attention};
`;
