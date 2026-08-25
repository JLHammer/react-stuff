import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.m};
  padding: ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.light};

  img {
    display: block;
    height: ${({ theme }) => theme.sizes.footerLogoHeight};
    width: auto;
  }
`;
