import styled from "styled-components";
import type { ContainerStyledProps } from "../../../types/types.styled";

export const ContainerStyled = styled.section<ContainerStyledProps>`
  padding: ${({ $padding }) => $padding || "0"};
`;
