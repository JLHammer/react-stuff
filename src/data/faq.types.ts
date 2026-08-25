export type FaqEntry = {
  id: string;
  question: string;
  // Paragraphs may contain inline markup, so they are parsed before rendering.
  answer: string[];
};
