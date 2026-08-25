import styled from "styled-components";
import { contentWidth, flexColumn } from "../../../styled/Mixins.styled";

export const ContentWrapperStyled = styled.div`
  width: 100%;
`;

export const ContentWrapperTitleBar = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.m};
`;

export const ContentWrapperTitle = styled.h1`
  ${contentWidth}
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-transform: uppercase;
`;

export const ContentWrapperContent = styled.div`
  ${contentWidth}
  ${flexColumn("s")}
  padding: ${({ theme }) => theme.spacing.m};
`;
