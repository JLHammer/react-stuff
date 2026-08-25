import { useState } from "react";
import type { ChangeEvent } from "react";
import { FormField } from "../../molecules/FormField/FormField";
import { GoalPreview } from "../../molecules/GoalPreview/GoalPreview";
import { GoalBuilderStyled, GoalBuilderFields } from "./GoalBuilder.styled";

const defaultColor = "#27bddf";
const defaultText = "Min måltekst";

const toCssColor = (value: string) => {
  const hex = value.trim().replace(/^#/, "");

  return /^[0-9a-f]{3}$|^[0-9a-f]{6}$/i.test(hex) ? `#${hex}` : defaultColor;
};

export const GoalBuilder = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  const handleTextChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(event.target.value);
  };

  const handleColorChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setColor(event.target.value);
  };

  return (
    <GoalBuilderStyled>
      <GoalBuilderFields onSubmit={(event) => event.preventDefault()}>
        <FormField
          id="goal-text"
          name="goalText"
          label="Måltekst"
          placeholder="Indtast din måltekst"
          value={text}
          onChange={handleTextChange}
        />
        <FormField
          id="goal-color"
          name="goalColor"
          label="Farvekode"
          placeholder="Fx #2bbbde"
          value={color}
          onChange={handleColorChange}
        />
      </GoalBuilderFields>

      <GoalPreview text={text || defaultText} color={toCssColor(color)} />
    </GoalBuilderStyled>
  );
};
