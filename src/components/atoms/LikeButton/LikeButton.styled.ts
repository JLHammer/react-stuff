import styled from "styled-components";

export const LikeButtonStyled = styled.button`
  display: block;
  width: ${({ theme }) => theme.sizes.likeButtonSize};
  height: ${({ theme }) => theme.sizes.likeButtonSize};
  background: none;
  padding: 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;
