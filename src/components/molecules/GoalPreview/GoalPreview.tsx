import type { GoalPreviewProps } from "./GoalPreview.types";
import { GoalPreviewStyled, GoalPreviewText } from "./GoalPreview.styled";

export const GoalPreview = ({ text, color }: GoalPreviewProps) => {
  return (
    <GoalPreviewStyled $color={color} aria-live="polite">
      <GoalPreviewText>{text}</GoalPreviewText>
    </GoalPreviewStyled>
  );
};
