import parse from "html-react-parser";
import type { GoalDetailProps } from "./GoalDetail.types";
import { Image } from "../../atoms/Image/Image";
import { LikeButton } from "../../atoms/LikeButton/LikeButton";
import {
  GoalDetailStyled,
  GoalDetailByline,
  GoalDetailMedia,
  GoalDetailFigure,
  GoalDetailText,
  GoalDetailVideo,
  GoalDetailVideoCaption,
} from "./GoalDetail.styled";

const toParagraphs = (description: string) => description.split("\n\n");

const toMutedEmbed = (url: string) =>
  `${url}${url.includes("?") ? "&" : "?"}mute=1`;

export const GoalDetail = ({ goal }: GoalDetailProps) => {
  return (
    <GoalDetailStyled>
      <GoalDetailByline>{goal.byline}</GoalDetailByline>

      <GoalDetailMedia>
        <GoalDetailFigure>
          <Image
            src={goal.imageUrl}
            alt={`Mål ${goal.id}: ${goal.title}`}
            width={872}
            height={492}
          />
        </GoalDetailFigure>
        <LikeButton label={`Synes godt om mål ${goal.id}: ${goal.title}`} />
      </GoalDetailMedia>

      <GoalDetailText>
        {toParagraphs(goal.description).map((paragraph, index) => (
          <p key={index}>{parse(paragraph)}</p>
        ))}
      </GoalDetailText>

      {goal.videoUrl && (
        <GoalDetailVideo>
          <iframe
            src={toMutedEmbed(goal.videoUrl)}
            title={`Video om mål ${goal.id}: ${goal.title}`}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <GoalDetailVideoCaption>
            Video om mål {goal.id}: {goal.title}
          </GoalDetailVideoCaption>
        </GoalDetailVideo>
      )}
    </GoalDetailStyled>
  );
};
