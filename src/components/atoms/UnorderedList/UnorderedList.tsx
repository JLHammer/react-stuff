import type { UnorderedListProps } from "./UnorderedList.types";
import { UnorderedListStyled } from "./UnorderedList.styled";

export const UnorderedList = ({ children }: UnorderedListProps) => {
  return <UnorderedListStyled>{children}</UnorderedListStyled>;
};
