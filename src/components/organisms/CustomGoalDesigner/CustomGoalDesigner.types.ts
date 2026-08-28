export type CustomGoalDesignerValues = {
  goalText: string;
  goalColor: string;
};

export type CustomGoalDesignerErrors = Partial<
  Record<keyof CustomGoalDesignerValues, string>
>;
