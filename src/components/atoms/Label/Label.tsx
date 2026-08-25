import type { LabelProps } from "./Label.types";
import { LabelStyled, RequiredMark } from "./Label.styled";

export const Label = ({ htmlFor, text, required }: LabelProps) => {
  return (
    <LabelStyled htmlFor={htmlFor}>
      {text}:{required && <RequiredMark aria-hidden="true">*</RequiredMark>}
    </LabelStyled>
  );
};
