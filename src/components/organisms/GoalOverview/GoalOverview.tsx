import { goals } from "../../../data/sdg";
import { GoalCard } from "../../molecules/GoalCard/GoalCard";
import {
  GoalOverviewStyled,
  GoalOverviewTitle,
  GoalGrid,
  GoalOverviewLogo,
} from "./GoalOverview.styled";

import verdensmaal from "../../../assets/images/verdensmaal.svg";

export const GoalOverview = () => {
  return (
    <GoalOverviewStyled>
      <GoalOverviewTitle>
        FN's 17 verdensmål for bæredygtig udvikling
      </GoalOverviewTitle>
      {goals.length === 0 ? (
        <p>Der er ingen verdensmål at vise</p>
      ) : (
        <GoalGrid>
          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              id={goal.id}
              title={goal.title}
              color={goal.color}
              icon={goal.icon}
            />
          ))}
          <GoalOverviewLogo
            src={verdensmaal}
            alt="Verdensmålene for bæredygtig udvikling"
          />
        </GoalGrid>
      )}
    </GoalOverviewStyled>
  );
};
