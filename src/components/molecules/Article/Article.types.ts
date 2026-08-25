export type ArticleProps = {
  title?: string;
  // Figma sets article headings in 24px and FAQ questions in 20px.
  headingLevel?: 2 | 3;
  lead?: string;
  // Paragraphs may contain inline markup, so they are parsed before rendering.
  paragraphs?: string[];
};
