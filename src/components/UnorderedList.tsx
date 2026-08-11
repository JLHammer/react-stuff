import type { UnorderedListProps } from "../types/types";

export const UnorderedList = ({
  margin,
  padding,
  display,
  gap,
  children,
}: UnorderedListProps) => {
  const unorderedListStyle = {
    listStyleType: "none",
    display: display,
    gap: gap,
    margin: margin,
    padding: padding,
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return <ul style={unorderedListStyle}>{children}</ul>;
};
