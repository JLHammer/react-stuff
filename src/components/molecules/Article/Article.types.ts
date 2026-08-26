import type { ReactNode } from "react";

export type ArticleProps = {
  title: string;
  lead?: string;
  paragraphs?: string[];
  children?: ReactNode;
};
