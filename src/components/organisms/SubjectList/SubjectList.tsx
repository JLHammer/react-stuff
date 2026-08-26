import { subjects } from "../../../data/subjects";
import { SubjectCard } from "../../molecules/SubjectCard/SubjectCard";
import { SubjectGrid } from "./SubjectList.styled";

export const SubjectList = () => {
  return (
    <SubjectGrid>
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.id}
          name={subject.name}
          color={subject.color}
        />
      ))}
    </SubjectGrid>
  );
};
