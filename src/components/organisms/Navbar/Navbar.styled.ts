import styled from "styled-components";
import { media } from "../../../styles/mixins";
import { MenuToggleStyled } from "../../atoms/MenuToggle/MenuToggle.styled";
import { NavbarLinkStyled } from "../../atoms/NavbarLink/NavbarLink.styled";
import { UnorderedListStyled } from "../../atoms/UnorderedList/UnorderedList.styled";
import type { NavbarPanelProps } from "./Navbar.types";

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;

  ${UnorderedListStyled} {
    flex-wrap: nowrap;
    gap: clamp(0.75rem, 1.3vw, 35px);
  }

  ${NavbarLinkStyled} {
    font-size: clamp(0.75rem, 1.15vw, ${({ theme }) => theme.fontSizes.s});
  }

  ${MenuToggleStyled} {
    display: none;
  }

  ${media("desktop")} {
    flex-direction: column;
    align-items: stretch;
    width: 100%;

    ${NavbarLinkStyled} {
      font-size: ${({ theme }) => theme.fontSizes.m};
    }

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
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition:
      opacity 0.2s ease,
      display 0.2s allow-discrete;
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

    @starting-style {
      opacity: 0;
    }
  }
`;
