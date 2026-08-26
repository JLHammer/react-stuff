import type { ReactNode } from "react";

export type AnchorLinkProps = {
  href: string;
  children: ReactNode;
  newTab?: boolean;
};
