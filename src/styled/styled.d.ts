import "styled-components";
import type { theme } from "./Theme.styled";

type ThemeType = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
