import type { MainProps } from "./Main.types";

export const Main = ({ id, children }: MainProps) => {
  return (
    <main id={id} tabIndex={-1}>
      {children}
    </main>
  );
};
