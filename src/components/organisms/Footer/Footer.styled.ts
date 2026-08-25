import styled from "styled-components";
import {
  contentWidth,
  flexColumn,
  flexRowCenter,
  labelText,
  media,
} from "../../../styled/Mixins.styled";
import footerBackground from "../../../assets/images/footer-background.svg";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.blueDark};
  background-image: url(${footerBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.light};
`;

export const FooterContent = styled.div`
  ${contentWidth}
  padding: ${({ theme }) => `${theme.spacing.l} ${theme.spacing.m}`};
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.l};

  ${media("tablet")} {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.m};
    padding: ${({ theme }) => theme.spacing.m};
  }
`;

export const FooterColumn = styled.div`
  ${flexColumn("m")}
`;

export const FooterSection = styled.section`
  ${flexColumn("s")}
`;

export const FooterTitle = styled.h2`
  ${labelText}
`;

export const FooterText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const FooterLogoRow = styled.div`
  ${flexRowCenter("m")}

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
