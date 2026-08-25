import styled from "styled-components";
import { flexColumn } from "../../../styled/Mixins.styled";

export const GoalDetailStyled = styled.article`
  ${flexColumn("m")}
`;

export const GoalDetailByline = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: bold;
`;

export const GoalDetailVideo = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
