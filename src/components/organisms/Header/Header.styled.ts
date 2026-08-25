import styled from "styled-components";
import { contentWidth, media } from "../../../styles/mixins";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderRowStyled = styled.div`
  ${contentWidth}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.m};
  min-height: 135px;

  img {
    display: block;
    height: ${({ theme }) => theme.sizes.headerLogoHeight};
    width: auto;
  }

  ${media("desktop")} {
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.s};
    padding-top: ${({ theme }) => theme.spacing.s};
    padding-bottom: ${({ theme }) => theme.spacing.s};
  }

  ${media("mobile")} {
    min-height: 0;

    img {
      height: ${({ theme }) => theme.sizes.headerLogoHeightSmall};
    }
  }
`;
