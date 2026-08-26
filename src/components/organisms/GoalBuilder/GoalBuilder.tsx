import { useState } from "react";
import type { ChangeEvent } from "react";
import type { GoalBuilderErrors, GoalBuilderValues } from "./GoalBuilder.types";
import { isFilled, isHexColor } from "../../../utils/validation";
import { FormField } from "../../molecules/FormField/FormField";
import { GoalPreview } from "../../molecules/GoalPreview/GoalPreview";
import { GoalBuilderStyled, GoalBuilderFields } from "./GoalBuilder.styled";

const defaultColor = "#27bddf";
const defaultText = "Min måltekst";
const maxTextLength = 60;

const emptyValues: GoalBuilderValues = {
  goalText: "",
  goalColor: "",
};

const validate = (values: GoalBuilderValues): GoalBuilderErrors => {
  const errors: GoalBuilderErrors = {};

  if (values.goalText.length > maxTextLength) {
    errors.goalText = `Måltekst må højst være ${maxTextLength} tegn.`;
  }

  if (isFilled(values.goalColor) && !isHexColor(values.goalColor)) {
    errors.goalColor = "Skriv en gyldig farvekode, fx #2bbbde.";
  }

  return errors;
};

const toCssColor = (value: string) =>
  isHexColor(value) ? `#${value.trim().replace(/^#/, "")}` : defaultColor;

export const GoalBuilder = () => {
  const [values, setValues] = useState<GoalBuilderValues>(emptyValues);
  const [errors, setErrors] = useState<GoalBuilderErrors>({});

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };

    setValues(nextValues);
    setErrors(validate(nextValues));
  };

  return (
    <GoalBuilderStyled onSubmit={(event) => event.preventDefault()} noValidate>
      <GoalBuilderFields>
        <FormField
          id="goal-text"
          name="goalText"
          label="Måltekst"
          placeholder="Indtast din måltekst"
          value={values.goalText}
          onChange={handleChange}
          error={errors.goalText}
        />
        <FormField
          id="goal-color"
          name="goalColor"
          label="Farvekode"
          placeholder="Fx #2bbbde"
          value={values.goalColor}
          onChange={handleChange}
          error={errors.goalColor}
        />
      </GoalBuilderFields>

      <GoalPreview
        text={values.goalText || defaultText}
        color={toCssColor(values.goalColor)}
      />
    </GoalBuilderStyled>
  );
};
