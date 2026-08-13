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
  // The description is not part of the layout - it tells the browser tab and
  // search engines what the page is about.
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
