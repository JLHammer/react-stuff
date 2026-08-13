import { Card } from "../Card/Card";
import {
  GoalOverviewStyled,
  GoalOverviewTitle,
  GoalGrid,
} from "./GoalOverview.styled";

import goal1 from "../../../assets/images/1-afskaf-fattigdom.svg";
import goal2 from "../../../assets/images/2-stop-sult.svg";
import goal3 from "../../../assets/images/3-sundhed-og-trivsel.svg";
import goal4 from "../../../assets/images/4-kvalitetsuddannelse.svg";
import goal5 from "../../../assets/images/5-ligestilling.svg";
import goal6 from "../../../assets/images/6-rent-vand.svg";
import goal7 from "../../../assets/images/7-baeredygtig-energi.svg";
import goal8 from "../../../assets/images/8-anstaendige-jobs.svg";
import goal9 from "../../../assets/images/9-industri-og-innovation.svg";
import goal10 from "../../../assets/images/10-mindre-ulighed.svg";
import goal11 from "../../../assets/images/11-baeredygtige-byer.svg";
import goal12 from "../../../assets/images/12-ansvarligt-forbrug.svg";
import goal13 from "../../../assets/images/13-klima-indsats.svg";
import goal14 from "../../../assets/images/14-livet-i-havet.svg";
import goal15 from "../../../assets/images/15-livet-paa-land.svg";
import goal16 from "../../../assets/images/16-retfaerdighed.svg";
import goal17 from "../../../assets/images/17-partnerskaber.svg";
import verdensmaal from "../../../assets/images/verdensmaal.svg";

const goals = [
  { src: goal1, alt: "Mål 1: Afskaf fattigdom" },
  { src: goal2, alt: "Mål 2: Stop sult" },
  { src: goal3, alt: "Mål 3: Sundhed og trivsel" },
  { src: goal4, alt: "Mål 4: Kvalitetsuddannelse" },
  { src: goal5, alt: "Mål 5: Ligestilling mellem kønnene" },
  { src: goal6, alt: "Mål 6: Rent vand og sanitet" },
  { src: goal7, alt: "Mål 7: Bæredygtig energi" },
  { src: goal8, alt: "Mål 8: Anstændige jobs og økonomisk vækst" },
  { src: goal9, alt: "Mål 9: Industri, innovation og infrastruktur" },
  { src: goal10, alt: "Mål 10: Mindre ulighed" },
  { src: goal11, alt: "Mål 11: Bæredygtige byer og lokalsamfund" },
  { src: goal12, alt: "Mål 12: Ansvarligt forbrug og produktion" },
  { src: goal13, alt: "Mål 13: Klimaindsats" },
  { src: goal14, alt: "Mål 14: Livet i havet" },
  { src: goal15, alt: "Mål 15: Livet på land" },
  { src: goal16, alt: "Mål 16: Fred, retfærdighed og stærke institutioner" },
  { src: goal17, alt: "Mål 17: Partnerskaber for handling" },
  { src: verdensmaal, alt: "Verdensmålene for bæredygtig udvikling" },
];

export const GoalOverview = () => {
  return (
    <GoalOverviewStyled>
      <GoalOverviewTitle>
        FN's 17 verdensmål for bæredygtig udvikling
      </GoalOverviewTitle>
      <GoalGrid>
        {goals.map((goal) => (
          <Card
            key={goal.alt}
            src={goal.src}
            alt={goal.alt}
            $width="100%"
            $height="auto"
          />
        ))}
      </GoalGrid>
    </GoalOverviewStyled>
  );
};
