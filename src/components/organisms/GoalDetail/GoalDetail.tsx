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
} from "./GoalDetail.styled";

const toParagraphs = (description: string) => description.split("\n\n");

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
    </GoalDetailStyled>
  );
};
