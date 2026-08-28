import { useEffect, useId, useState } from "react";
import type { SubjectData } from "../../../data/subjects.types";
import { SubjectCard } from "../../molecules/SubjectCard/SubjectCard";
import {
  SubjectListStyled,
  SubjectListTitle,
  SubjectListDivider,
  SubjectListStatus,
  SubjectGrid,
} from "./SubjectList.styled";

const url = "http://localhost:4000/api/education";

const toHexColor = (color: string) =>
  color.startsWith("#") ? color : `#${color}`;

export const SubjectList = () => {
  const titleId = useId();
  const [subjects, setSubjects] = useState<SubjectData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Serveren svarede med ${response.status}`);
        }

        const data: SubjectData[] = await response.json();

        setSubjects(data);
      } catch (caught) {
        setError("Vi kunne ikke hente fagene lige nu. Prøv igen senere.");
        console.error(caught);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <SubjectListStyled aria-labelledby={titleId}>
      <SubjectListTitle id={titleId}>Fag i undervisningen</SubjectListTitle>
      <SubjectListDivider aria-hidden="true" />

      {isLoading && (
        <SubjectListStatus role="status">Henter fag …</SubjectListStatus>
      )}

      {error && <SubjectListStatus role="alert">{error}</SubjectListStatus>}

      {!isLoading && !error && subjects.length === 0 && (
        <SubjectListStatus role="status">
          Der er ingen fag at vise
        </SubjectListStatus>
      )}

      {subjects.length > 0 && (
        <SubjectGrid>
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              name={subject.name}
              color={toHexColor(subject.color)}
            />
          ))}
        </SubjectGrid>
      )}
    </SubjectListStyled>
  );
};
