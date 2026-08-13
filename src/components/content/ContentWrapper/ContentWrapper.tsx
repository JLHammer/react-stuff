import type { ContentWrapperProps } from "../../../types/types";
import { ContentWrapperStyled } from "./ContentWrapper.styled";

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <ContentWrapperStyled>{children}</ContentWrapperStyled>;
};
