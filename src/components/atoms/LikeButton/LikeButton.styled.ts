import styled from "styled-components";

export const LikeButtonStyled = styled.button`
  display: flex;
  background: none;
  padding: 0;
  cursor: pointer;

  img {
    display: block;
    width: ${({ theme }) => theme.sizes.likeButtonSize};
    height: ${({ theme }) => theme.sizes.likeButtonSize};
  }
`;
