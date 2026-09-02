import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import type { ThemeData } from "../data/themes.types";
import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { ThemeNav } from "../components/molecules/ThemeNav/ThemeNav";
import { ThemePageLayout } from "./ThemePage.styled";

const url = "http://localhost:4000/api/themes";

export const ThemePage = () => {
  const [themes, setThemes] = useState<ThemeData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Serveren svarede med ${response.status}`);
        }

        const data: ThemeData[] = await response.json();

        setThemes(data);
      } catch (caught) {
        setError("Vi kunne ikke hente temaerne lige nu. Prøv igen senere.");
        console.error(caught);
      } finally {
        setIsLoading(false);
      }
    };

    fetchThemes();
  }, []);

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
