import { useState } from "react";
import type { LikeButtonProps } from "./LikeButton.types";
import { LikeButtonStyled, LikeButtonCount } from "./LikeButton.styled";
import likeOutline from "../../../assets/images/like-outline.svg";
import likeFilled from "../../../assets/images/like-filled.svg";

export const LikeButton = ({ label }: LikeButtonProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <LikeButtonStyled
      type="button"
      aria-pressed={liked}
      aria-label={`${label}. ${likes} synes godt om målet.`}
      onClick={toggleLike}
    >
      <img src={liked ? likeFilled : likeOutline} alt="" />
      <LikeButtonCount>{likes}</LikeButtonCount>
    </LikeButtonStyled>
  );
};
