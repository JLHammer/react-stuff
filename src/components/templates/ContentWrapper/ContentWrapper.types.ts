import type { ReactNode } from "react";

export type ContentWrapperProps = {
  title: string;
  description: string;
  color?: string;
  icon?: string;
  children: ReactNode;
};

export type ContentWrapperTitleBarStyledProps = {
  $color?: string;
};
