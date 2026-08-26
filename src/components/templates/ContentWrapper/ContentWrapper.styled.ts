import styled from "styled-components";
import {
  contentWidth,
  goalIcon,
  headingOswald,
  media,
} from "../../../styles/mixins";
import type { ContentWrapperTitleBarStyledProps } from "./ContentWrapper.types";

export const ContentWrapperTitleBar = styled.header<ContentWrapperTitleBarStyledProps>`
  display: flex;
  align-items: center;
  min-height: ${({ theme }) => theme.sizes.bannerHeight};
  background-color: ${({ theme, $color }) =>
    $color ?? theme.colors.bannerBackground};
  color: ${({ theme, $color }) => ($color ? theme.colors.white : "inherit")};

  ${media("mobile")} {
    min-height: ${({ theme }) => theme.sizes.bannerHeightSmall};
  }
`;

export const ContentWrapperTitleBarInner = styled.div`
  ${contentWidth}
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s};
`;

export const ContentWrapperIcon = styled.div`
  ${goalIcon}
  flex: 0 0 auto;
  width: ${({ theme }) => theme.sizes.bannerIconWidth};

  ${media("mobile")} {
    width: ${({ theme }) => theme.sizes.bannerIconWidthSmall};
  }
`;

export const ContentWrapperTitle = styled.h1`
  ${headingOswald}
  min-width: 0;

  &:focus {
    outline: none;
  }

  ${media("mobile")} {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

export const ContentWrapperContent = styled.div`
  ${contentWidth}
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m};
  padding-top: ${({ theme }) => theme.spacing.m};
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  ${media("mobile")} {
    gap: ${({ theme }) => theme.spacing.s};
    padding-bottom: ${({ theme }) => theme.spacing.l};
  }
`;
