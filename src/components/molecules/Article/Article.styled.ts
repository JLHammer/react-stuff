import styled from "styled-components";

export const ArticleStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
`;

// Figma h2: Open Sans SemiBold 24.
export const ArticleTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 600;
`;

// Figma h3: Open Sans SemiBold 20.
export const ArticleSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 600;
`;

export const ArticleLead = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 600;
`;
