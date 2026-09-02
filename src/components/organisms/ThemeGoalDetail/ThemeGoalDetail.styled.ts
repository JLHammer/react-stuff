import styled from "styled-components";
import { Link } from "react-router-dom";
import { buttonSurface, statusText } from "../../../styles/mixins";

export const ThemeGoalDetailStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;

export const ThemeGoalDetailTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 600;
`;

export const ThemeGoalDetailText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;

export const ThemeGoalDetailStatus = styled.p`
  ${statusText}
`;

export const ThemeGoalDetailBack = styled(Link)`
  ${buttonSurface}
  align-self: flex-start;
  text-decoration: none;
`;
