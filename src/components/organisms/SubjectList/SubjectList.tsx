import { useId } from "react";
import type { SubjectData } from "../../../data/subjects.types";
import { useFetch } from "../../../hooks/useFetch";
import { toHexColor } from "../../../utils/color";
import { SubjectCard } from "../../molecules/SubjectCard/SubjectCard";
import {
  SubjectListStyled,
  SubjectListTitle,
  SubjectListDivider,
  SubjectListStatus,
  SubjectGrid,
} from "./SubjectList.styled";

const url = "http://localhost:4000/api/education";

export const SubjectList = () => {
  const titleId = useId();
  const { data, isLoading, error } = useFetch<SubjectData[]>(url);

  const subjects = data ?? [];

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
