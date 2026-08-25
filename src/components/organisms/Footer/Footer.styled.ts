import styled from "styled-components";
import { contentWidth, media } from "../../../styles/mixins";
import footerBackground from "../../../assets/images/footer-background.svg";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBackground};
  background-image: url(${footerBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterContent = styled.div`
  ${contentWidth}
  padding-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  ${media("tablet")} {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.m};
    padding-top: ${({ theme }) => theme.spacing.m};
    padding-bottom: ${({ theme }) => theme.spacing.m};
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m};
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;

export const FooterTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 700;
  text-transform: uppercase;
`;

export const FooterText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 300;
`;

export const FooterLogoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.m};

  img {
    display: block;
    height: ${({ theme }) => theme.sizes.footerLogoHeight};
    width: auto;
  }
`;

export const FooterPartnerRow = styled(FooterLogoRow)`
  img {
    height: ${({ theme }) => theme.sizes.footerLogoHeightLarge};
  }
`;
