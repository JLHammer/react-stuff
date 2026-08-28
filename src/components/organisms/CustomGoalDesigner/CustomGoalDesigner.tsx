import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import type {
  CustomGoalDesignerErrors,
  CustomGoalDesignerValues,
} from "./CustomGoalDesigner.types";
import { isFilled, isHexColor } from "../../../utils/validation";
import { FormField } from "../../molecules/FormField/FormField";
import { GoalPreview } from "../../molecules/GoalPreview/GoalPreview";
import {
  CustomGoalDesignerStyled,
  CustomGoalDesignerFields,
} from "./CustomGoalDesigner.styled";

const defaultText = "Min måltekst";
const maxTextLength = 30;

const emptyValues: CustomGoalDesignerValues = {
  goalText: "",
  goalColor: "",
};

const validate = (
  values: CustomGoalDesignerValues,
): CustomGoalDesignerErrors => {
  const errors: CustomGoalDesignerErrors = {};

  if (!isFilled(values.goalText)) {
    errors.goalText = "Skriv en måltekst.";
  } else if (values.goalText.length > maxTextLength) {
    errors.goalText = `Måltekst må højst være ${maxTextLength} tegn.`;
  }

  if (!isFilled(values.goalColor)) {
    errors.goalColor = "Skriv en farvekode.";
  } else if (!isHexColor(values.goalColor)) {
    errors.goalColor = "Skriv en gyldig farvekode, fx #ff0000 eller #fff.";
  }

  return errors;
};

const toCssColor = (value: string) =>
  isHexColor(value) ? value.trim() : undefined;

export const CustomGoalDesigner = () => {
  const [values, setValues] = useState<CustomGoalDesignerValues>(emptyValues);
  const [errors, setErrors] = useState<CustomGoalDesignerErrors>({});

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setErrors(validate(values));
  }, [values]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <CustomGoalDesignerStyled
      onSubmit={(event) => event.preventDefault()}
      noValidate
    >
      <CustomGoalDesignerFields>
        <FormField
          id="goal-text"
          name="goalText"
          label="Måltekst"
          placeholder="Indtast din måltekst"
          value={values.goalText}
          onChange={handleChange}
          error={errors.goalText}
          hint={`${values.goalText.length} af ${maxTextLength} tegn`}
          required
        />
        <FormField
          id="goal-color"
          name="goalColor"
          label="Farvekode"
          placeholder="Fx #2bbbde"
          value={values.goalColor}
          onChange={handleChange}
          error={errors.goalColor}
          required
        />
      </CustomGoalDesignerFields>

      <GoalPreview
        text={values.goalText || defaultText}
        color={toCssColor(values.goalColor)}
      />
    </CustomGoalDesignerStyled>
  );
};
