import type { ContainerProps } from "../../../types/types";
import { ContainerStyled } from "./Container.styled";

export const Container = ({ $padding, children }: ContainerProps) => {
  return <ContainerStyled $padding={$padding}>{children}</ContainerStyled>;
};
