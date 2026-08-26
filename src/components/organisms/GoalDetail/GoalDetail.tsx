import { useState } from "react";
import parse from "html-react-parser";
import type { GoalDetailProps } from "./GoalDetail.types";
import { LikeButton } from "../../atoms/LikeButton/LikeButton";
import {
  GoalDetailStyled,
  GoalDetailByline,
  GoalDetailMedia,
  GoalDetailVideo,
  GoalDetailText,
} from "./GoalDetail.styled";

const toParagraphs = (description: string) => description.split("\n\n");

const toMutedEmbed = (url: string) =>
  `${url}${url.includes("?") ? "&" : "?"}mute=1`;

export const GoalDetail = ({ goal }: GoalDetailProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <GoalDetailStyled aria-label={`Mål ${goal.id}: ${goal.title}`}>
      <GoalDetailByline>{goal.byline}</GoalDetailByline>

      <GoalDetailMedia>
        {goal.videoUrl && (
          <GoalDetailVideo>
            <iframe
              src={toMutedEmbed(goal.videoUrl)}
              title={`Video om mål ${goal.id}: ${goal.title}`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </GoalDetailVideo>
        )}
        <LikeButton
          isLiked={isLiked}
          goalName={`mål ${goal.id}: ${goal.title}`}
          onClick={() => setIsLiked(!isLiked)}
        />
      </GoalDetailMedia>

      <GoalDetailText>
        {toParagraphs(goal.description).map((paragraph, index) => (
          <p key={index}>{parse(paragraph)}</p>
        ))}
      </GoalDetailText>
    </GoalDetailStyled>
  );
};
