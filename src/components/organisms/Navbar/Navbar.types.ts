import type { ReactNode } from "react";

export type NavbarProps = {
  children: ReactNode;
};

export type NavbarLinkProps = {
  to: string;
  end?: boolean;
  children: ReactNode;
};
