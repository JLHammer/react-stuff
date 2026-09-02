import type { ThemeData } from "../../../data/themes.types";

export type ThemeNavProps = {
  themes: ThemeData[];
  isLoading: boolean;
  error: string;
};
