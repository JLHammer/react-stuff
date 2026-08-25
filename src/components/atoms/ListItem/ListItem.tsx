import type { ListItemProps } from "./ListItem.types";

export const ListItem = ({ children }: ListItemProps) => {
  return <li>{children}</li>;
};
