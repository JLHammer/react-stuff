export type GoalBuilderValues = {
  goalText: string;
  goalColor: string;
};

export type GoalBuilderErrors = Partial<
  Record<keyof GoalBuilderValues, string>
>;
