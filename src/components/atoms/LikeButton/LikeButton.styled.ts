import styled from "styled-components";

export const LikeButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background: none;
  padding: 0;
  cursor: pointer;

  img {
    display: block;
    width: ${({ theme }) => theme.sizes.likeButtonSize};
    height: ${({ theme }) => theme.sizes.likeButtonSize};
  }
`;

export const LikeButtonCount = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 1;
`;
