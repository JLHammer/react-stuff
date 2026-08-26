import styled from "styled-components";
import type { LikeButtonStyledProps } from "./LikeButton.types";
import { visuallyHidden } from "../../../styles/mixins";

export const LikeButtonStyled = styled.button<LikeButtonStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  background: none;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ $isLiked }) => ($isLiked ? 600 : 400)};
  color: ${({ $isLiked, theme }) =>
    $isLiked ? theme.colors.accent : theme.colors.text};
  cursor: pointer;

  img {
    display: block;
    width: ${({ theme }) => theme.sizes.likeButtonSize};
    height: ${({ theme }) => theme.sizes.likeButtonSize};
  }
`;

export const LikeButtonContext = styled.span`
  ${visuallyHidden}
`;
