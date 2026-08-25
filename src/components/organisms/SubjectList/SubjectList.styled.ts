import styled from "styled-components";
import { media } from "../../../styles/mixins";

export const SubjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px 32px;

  ${media("tablet")} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.s};
  }

  ${media("mobile")} {
    grid-template-columns: minmax(0, 1fr);
  }
`;
