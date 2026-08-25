import styled from "styled-components";
import { contentWidth, headingOswald } from "../../../styles/mixins";

export const ContentWrapperStyled = styled.div`
  width: 100%;
`;

// Figma "Main Header": a 100px band in #ededed holding the page title.
export const ContentWrapperTitleBar = styled.div`
  display: flex;
  align-items: center;
  min-height: ${({ theme }) => theme.sizes.bannerHeight};
  background-color: ${({ theme }) => theme.colors.bannerBackground};
`;

export const ContentWrapperTitle = styled.h1`
  ${contentWidth}
  ${headingOswald}
`;

export const ContentWrapperContent = styled.div`
  ${contentWidth}
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m};
  padding-top: ${({ theme }) => theme.spacing.m};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
`;
