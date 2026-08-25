import styled from "styled-components";

// Figma renders the countdown in the footer's bold 16px style, uppercase.
export const CountdownStyled = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 700;
  text-transform: uppercase;
`;

export const CountdownValue = styled.span`
  font-variant-numeric: tabular-nums;
`;
