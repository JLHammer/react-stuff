import type { ReactNode } from "react";

export type NavbarLinkProps = {
  to: string;
  end?: boolean;
  children: ReactNode;
};
