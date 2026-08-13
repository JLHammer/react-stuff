import type { ContentWrapperProps } from "../../../types/types";
import {
  ContentWrapperStyled,
  ContentWrapperTitle,
  ContentWrapperDescription,
} from "./ContentWrapper.styled";

export const ContentWrapper = ({
  title,
  description,
  showTitle = true,
  children,
}: ContentWrapperProps) => {
  return (
    <ContentWrapperStyled>
      {showTitle && <ContentWrapperTitle>{title}</ContentWrapperTitle>}
      <ContentWrapperDescription>{description}</ContentWrapperDescription>
      {children}
    </ContentWrapperStyled>
  );
};
