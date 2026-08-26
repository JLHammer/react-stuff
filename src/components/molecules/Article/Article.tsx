import { useId } from "react";
import parse from "html-react-parser";
import type { ArticleProps } from "./Article.types";
import { ArticleStyled, ArticleTitle, ArticleLead } from "./Article.styled";

export const Article = ({
  title,
  lead,
  paragraphs = [],
  children,
}: ArticleProps) => {
  const titleId = useId();

  return (
    <ArticleStyled aria-labelledby={titleId}>
      <ArticleTitle id={titleId}>{title}</ArticleTitle>
      {lead && <ArticleLead>{lead}</ArticleLead>}
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{parse(paragraph)}</p>
      ))}
      {children}
    </ArticleStyled>
  );
};
