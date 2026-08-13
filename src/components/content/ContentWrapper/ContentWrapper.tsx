import { useEffect } from "react";
import type { ContentWrapperProps } from "../../../types/types";
import {
  ContentWrapperStyled,
  ContentWrapperTitle,
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
    document.title = `${title} | Verdensmålene`;
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", description);
  }, [title, description]);

  return (
    <ContentWrapperStyled>
      {showTitle && <ContentWrapperTitle>{title}</ContentWrapperTitle>}
      {children}
    </ContentWrapperStyled>
  );
};
