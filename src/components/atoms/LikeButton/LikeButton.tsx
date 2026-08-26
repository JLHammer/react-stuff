import { useState } from "react";
import type { LikeButtonProps } from "./LikeButton.types";
import { LikeButtonStyled } from "./LikeButton.styled";
import likeOutline from "../../../assets/images/like-outline.svg";
import likeFilled from "../../../assets/images/like-filled.svg";

export const LikeButton = ({ goalName }: LikeButtonProps) => {
  const [liked, setLiked] = useState(false);

  const label = liked
    ? `Fjern dit synes godt om ${goalName}`
    : `Synes godt om ${goalName}`;

  return (
    <LikeButtonStyled
      type="button"
      aria-pressed={liked}
      aria-label={label}
      onClick={() => setLiked(!liked)}
    >
      <img src={liked ? likeFilled : likeOutline} alt="" />
    </LikeButtonStyled>
  );
};
