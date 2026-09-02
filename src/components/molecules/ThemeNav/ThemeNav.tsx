import type { ThemeNavProps } from "./ThemeNav.types";
import {
  ThemeNavStyled,
  ThemeNavTitle,
  ThemeNavStatus,
  ThemeNavList,
  ThemeNavLink,
} from "./ThemeNav.styled";

export const ThemeNav = ({ themes, isLoading, error }: ThemeNavProps) => {
  return (
    <ThemeNavStyled aria-label="Vælg tema">
      <ThemeNavTitle>Vælg tema</ThemeNavTitle>

      {isLoading && (
        <ThemeNavStatus role="status">Henter temaer …</ThemeNavStatus>
      )}

      {error && <ThemeNavStatus role="alert">{error}</ThemeNavStatus>}

      {themes.length > 0 && (
        <ThemeNavList>
          {themes.map((item) => (
            <li key={item.id}>
              <ThemeNavLink to={`/temaer/${item.slug}`} end={false}>
                {item.title}
              </ThemeNavLink>
            </li>
          ))}
        </ThemeNavList>
      )}
    </ThemeNavStyled>
  );
};
