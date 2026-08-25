import type { GoalNavProps } from "./GoalNav.types";
import { GoalIcon } from "../../atoms/GoalIcon/GoalIcon";
import {
  GoalNavStyled,
  GoalNavLink,
  GoalNavIcon,
  GoalNavText,
  GoalNavDirection,
  GoalNavTitle,
  GoalNavOverview,
} from "./GoalNav.styled";

export const GoalNav = ({ previous, next }: GoalNavProps) => {
  return (
    <GoalNavStyled aria-label="Naviger mellem verdensmålene">
      <GoalNavLink to={`/maal/${previous.id}`} $color={previous.color}>
        <GoalNavIcon aria-hidden="true">
          <GoalIcon icon={previous.icon} />
        </GoalNavIcon>
        <GoalNavText>
          <GoalNavDirection>&larr; Forrige mål</GoalNavDirection>
          <GoalNavTitle>
            {previous.id}. {previous.title}
          </GoalNavTitle>
        </GoalNavText>
      </GoalNavLink>

      <GoalNavOverview to="/">Alle verdensmål</GoalNavOverview>

      <GoalNavLink to={`/maal/${next.id}`} $color={next.color} $align="end">
        <GoalNavIcon aria-hidden="true">
          <GoalIcon icon={next.icon} />
        </GoalNavIcon>
        <GoalNavText>
          <GoalNavDirection>Næste mål &rarr;</GoalNavDirection>
          <GoalNavTitle>
            {next.id}. {next.title}
          </GoalNavTitle>
        </GoalNavText>
      </GoalNavLink>
    </GoalNavStyled>
  );
};
