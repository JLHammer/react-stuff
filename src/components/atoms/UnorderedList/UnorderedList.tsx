import type { UnorderedListProps } from "../../../types/types";
import { UnorderedListStyled } from "./UnorderedList.styled";

export const UnorderedList = ({
  $display,
  $gap,
  children,
}: UnorderedListProps) => {
  return (
    <UnorderedListStyled $display={$display} $gap={$gap}>
      {children}
    </UnorderedListStyled>
  );
};
