import parse from "html-react-parser";
import type { ArticleProps } from "./Article.types";
import {
  ArticleStyled,
  ArticleTitle,
  ArticleSubtitle,
  ArticleLead,
} from "./Article.styled";

export const Article = ({
  title,
  headingLevel = 2,
  lead,
  paragraphs = [],
}: ArticleProps) => {
  const Heading = headingLevel === 3 ? ArticleSubtitle : ArticleTitle;

  return (
    <ArticleStyled>
      {title && <Heading>{title}</Heading>}
      {lead && <ArticleLead>{lead}</ArticleLead>}
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{parse(paragraph)}</p>
      ))}
    </ArticleStyled>
  );
};
