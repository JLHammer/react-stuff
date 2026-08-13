import styled from "styled-components";
import type { UnorderedListStyledProps } from "../../../types/types.styled";

export const UnorderedListStyled = styled.ul<UnorderedListStyledProps>`
  display: ${({ $display }) => $display || "flex"};
  gap: ${({ $gap }) => $gap || "0"};
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;
