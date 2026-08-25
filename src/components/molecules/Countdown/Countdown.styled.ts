import styled from "styled-components";

export const CountdownStyled = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 700;
  text-transform: uppercase;
`;

export const CountdownValue = styled.span`
  font-variant-numeric: tabular-nums;
`;
