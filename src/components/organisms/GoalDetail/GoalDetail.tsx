import parse from "html-react-parser";
import type { GoalDetailProps } from "../../../types/types";
import {
  GoalDetailStyled,
  GoalDetailByline,
  GoalDetailVideo,
} from "./GoalDetail.styled";

const toParagraphs = (description: string) => description.split("\n\n");

export const GoalDetail = ({ goal }: GoalDetailProps) => {
  return (
    <GoalDetailStyled>
      <GoalDetailByline>{goal.byline}</GoalDetailByline>

      <GoalDetailVideo>
        <iframe
          src={goal.video_url}
          title={`Verdensmål ${goal.id}: ${goal.title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </GoalDetailVideo>

      {toParagraphs(goal.description).map((paragraph, index) => (
        <p key={index}>{parse(paragraph)}</p>
      ))}
    </GoalDetailStyled>
  );
};