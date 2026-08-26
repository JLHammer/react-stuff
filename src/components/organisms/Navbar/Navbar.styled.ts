import styled from "styled-components";
import { media } from "../../../styles/mixins";
import { MenuToggleStyled } from "../../atoms/MenuToggle/MenuToggle.styled";
import { UnorderedListStyled } from "../../atoms/UnorderedList/UnorderedList.styled";
import type { NavbarPanelProps } from "./Navbar.types";

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;

  ${UnorderedListStyled} {
    gap: 35px;
  }

  ${MenuToggleStyled} {
    display: none;
  }

  ${media("desktop")} {
    flex-direction: column;
    align-items: stretch;
    width: 100%;

    ${MenuToggleStyled} {
      display: inline-flex;
      align-self: flex-end;
    }
  }
`;

export const NavbarPanel = styled.div<NavbarPanelProps>`
  display: flex;
  align-items: center;

  ${media("desktop")} {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.border};

    ${UnorderedListStyled} {
      flex-direction: column;
      align-items: stretch;
      gap: 0;
    }

    ${UnorderedListStyled} > li {
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;
