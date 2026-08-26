import type { LikeButtonProps } from "./LikeButton.types";
import { LikeButtonStyled, LikeButtonContext } from "./LikeButton.styled";
import likeOutline from "../../../assets/images/like-outline.svg";
import likeFilled from "../../../assets/images/like-filled.svg";

export const LikeButton = ({ isLiked, goalName, onClick }: LikeButtonProps) => {
  return (
    <LikeButtonStyled
      type="button"
      onClick={onClick}
      aria-pressed={isLiked}
      $isLiked={isLiked}
    >
      <img src={isLiked ? likeFilled : likeOutline} alt="" />
      {isLiked ? "Liked" : "Like"}
      <LikeButtonContext> {goalName}</LikeButtonContext>
    </LikeButtonStyled>
  );
};
