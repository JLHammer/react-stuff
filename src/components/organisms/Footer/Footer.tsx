import { useId } from "react";
import { Logo } from "../../molecules/Logo/Logo";
import { NewsletterForm } from "../../molecules/NewsletterForm/NewsletterForm";
import { Countdown } from "../../molecules/Countdown/Countdown";
import {
  FooterStyled,
  FooterContent,
  FooterColumn,
  FooterSection,
  FooterTitle,
  FooterText,
  FooterLogoRow,
  FooterPartnerRow,
} from "./Footer.styled";
import undpLogo from "../../../assets/images/undp-logo.svg";
import msLogo from "../../../assets/images/ms-logo.svg";
import globaleGymnasierLogo from "../../../assets/images/globale-gymnasier-logo.svg";
import danidaLogo from "../../../assets/images/danida-logo.svg";

export const Footer = () => {
  const aboutId = useId();
  const newsletterId = useId();
  const partnersId = useId();
  const supportId = useId();

  return (
    <FooterStyled>
      <FooterContent>
        <FooterColumn>
          <FooterSection aria-labelledby={aboutId}>
            <FooterTitle id={aboutId}>Om hjemmesiden</FooterTitle>
            <FooterText>
              Dette digitale læringssite er udviklet af UNDP's nordiske kontor i
              Danmark, Globale Gymnasier og Mellemfolkeligt
              Samvirke/VerdensKlasse med støtte fra Danidas Oplysningsbevilling.
            </FooterText>
            <FooterText>
              Vores mål med dette site er at give lærere og elever på landets
              ungdomsuddannelser mulighed for at opnå viden, holdninger og
              handlingskompetence i forhold til FN's verdensmål for bæredygtig
              udvikling. Sitet opdateres løbende med nyeste statistik, viden og
              nye undervisningsforløb.
            </FooterText>
          </FooterSection>

          <FooterSection aria-labelledby={newsletterId}>
            <FooterTitle id={newsletterId}>Tilmeld nyhedsbrev</FooterTitle>
            <FooterText>
              Tilmeld dig vores nyhedsbrev og få sidste nyt tilsendt direkte til
              din indbakke.
            </FooterText>
            <NewsletterForm />
          </FooterSection>

          <Countdown
            label="Antal sekunder til 2030"
            targetDate="2030-01-01T00:00:00"
          />
        </FooterColumn>

        <FooterColumn>
          <FooterSection aria-labelledby={partnersId}>
            <FooterTitle id={partnersId}>Organisationerne bag</FooterTitle>
            <FooterPartnerRow>
              <Logo
                src={undpLogo}
                alt="UNDP"
                href="https://www.undp.org/"
                newTab
              />
              <Logo
                src={msLogo}
                alt="Mellemfolkeligt Samvirke"
                href="https://www.globalaktion.dk/"
                newTab
              />
            </FooterPartnerRow>
            <FooterLogoRow>
              <Logo
                src={globaleGymnasierLogo}
                alt="Globale Gymnasier"
                href="https://www.globalegymnasier.dk/"
                newTab
              />
            </FooterLogoRow>
          </FooterSection>

          <FooterSection aria-labelledby={supportId}>
            <FooterTitle id={supportId}>
              Udviklet med støtte fra Danidas Oplysningsbevilling
            </FooterTitle>
            <FooterLogoRow>
              <Logo
                src={danidaLogo}
                alt="Danida"
                href="https://um.dk/danida"
                newTab
              />
            </FooterLogoRow>
          </FooterSection>
        </FooterColumn>
      </FooterContent>
    </FooterStyled>
  );
};
