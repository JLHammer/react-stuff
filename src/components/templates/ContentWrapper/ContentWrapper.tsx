import { useEffect } from "react";
import type { ContentWrapperProps } from "../../../types/types";
import {
  ContentWrapperStyled,
  ContentWrapperTitleBar,
  ContentWrapperTitle,
  ContentWrapperContent,
} from "./ContentWrapper.styled";

export const ContentWrapper = ({
  title,
  description,
  showTitle = true,
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
      {showTitle && (
        <ContentWrapperTitleBar>
          <ContentWrapperTitle>{title}</ContentWrapperTitle>
        </ContentWrapperTitleBar>
      )}
      <ContentWrapperContent>{children}</ContentWrapperContent>
    </ContentWrapperStyled>
  );
};
