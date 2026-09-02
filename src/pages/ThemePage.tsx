import { Outlet } from "react-router-dom";
import type { ThemeData } from "../data/themes.types";
import { useFetch } from "../hooks/useFetch";
import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { ThemeNav } from "../components/molecules/ThemeNav/ThemeNav";
import { ThemePageLayout } from "./ThemePage.styled";

const url = "http://localhost:4000/api/themes";

export const ThemePage = () => {
  const { data, isLoading, error } = useFetch<ThemeData[]>(url);

  const themes = data ?? [];

  return (
    <ContentWrapper
      title="Temaer"
      description="Se verdensmålene fordelt på de fem temaer: mennesker, planeten, velstand, fred og partnerskaber."
    >
      <ThemePageLayout>
        <ThemeNav themes={themes} isLoading={isLoading} error={error} />
        <Outlet context={themes} />
      </ThemePageLayout>
    </ContentWrapper>
  );
};
