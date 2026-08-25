import type { MainProps } from "../../../types/types";
import { MainStyled } from "./Main.styled";

export const Main = ({ children }: MainProps) => {
  return <MainStyled>{children}</MainStyled>;
};
