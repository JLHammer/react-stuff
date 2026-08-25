import styled from "styled-components";
import { contentWidth, flexColumn, media } from "../../../styled/Mixins.styled";

export const HeaderStyled = styled.header`
  ${flexColumn()}
  background-color: ${({ theme }) => theme.colors.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const HeaderRowStyled = styled.div`
  ${contentWidth}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.m};
  padding: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.m}`};

  img {
    display: block;
    height: ${({ theme }) => theme.sizes.headerLogoHeight};
    width: auto;
  }

  ${media("tablet")} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.s};
  }
`;
