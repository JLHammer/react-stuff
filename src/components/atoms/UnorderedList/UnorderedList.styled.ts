import styled from "styled-components";
import type { UnorderedListStyledProps } from "../../../types/types.styled";

export const UnorderedListStyled = styled.ul<UnorderedListStyledProps>`
  display: ${({ $display }) => $display || "flex"};
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ $gap, theme }) => $gap || theme.spacing.m};
`;
