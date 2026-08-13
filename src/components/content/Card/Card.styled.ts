import styled from "styled-components";
import type { CardStyledProps } from "../../../types/types.styled";

export const CardStyled = styled.img<CardStyledProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
