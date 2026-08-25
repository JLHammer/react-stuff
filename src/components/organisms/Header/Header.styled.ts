import styled from "styled-components";
import { flexColumn } from "../../../styled/Mixins.styled";

export const HeaderStyled = styled.header`
  ${flexColumn()}
`;

export const HeaderRowStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.s};
`;
