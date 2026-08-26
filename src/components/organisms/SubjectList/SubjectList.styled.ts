import styled from "styled-components";
import { media } from "../../../styles/mixins";

export const SubjectGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.l};

  ${media("tablet")} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.s};
  }

  ${media("mobile")} {
    grid-template-columns: minmax(0, 1fr);
  }
`;
