import { useEffect } from "react";
import type { ContentWrapperProps } from "./ContentWrapper.types";
import {
  ContentWrapperStyled,
  ContentWrapperTitleBar,
  ContentWrapperTitle,
  ContentWrapperContent,
} from "./ContentWrapper.styled";

export const ContentWrapper = ({
  title,
  description,
  children,
}: ContentWrapperProps) => {
  useEffect(() => {
    document.title = title;
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", description);
  }, [title, description]);

  return (
    <ContentWrapperStyled>
      <ContentWrapperTitleBar>
        <ContentWrapperTitle>{title}</ContentWrapperTitle>
      </ContentWrapperTitleBar>
      <ContentWrapperContent>{children}</ContentWrapperContent>
    </ContentWrapperStyled>
  );
};
