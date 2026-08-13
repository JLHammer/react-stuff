import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header/Header";
import { Main } from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";
import { Navbar } from "./components/content/Navbar/Navbar";
import { UnorderedList } from "./components/content/UnorderedList/UnorderedList";
import { ListItem } from "./components/content/ListItem/ListItem";
import { NavigationLink } from "./components/content/NavigationLink/NavigationLink";
import { LoginButton } from "./components/content/LoginButton/LoginButton";
import { Logo } from "./components/content/Logo/Logo";
import { HomePage } from "./pages/HomePage";
import { EducationPage } from "./pages/EducationPage";
import { CustomGoalPage } from "./pages/CustomGoalPage";
import { FaqPage } from "./pages/FaqPage";
import { ContactPage } from "./pages/ContactPage";
import { NoPage } from "./pages/NoPage";
import logo from "./assets/Logo.svg";
import undpLogo from "./assets/images/undp-logo.svg";
import msLogo from "./assets/images/ms-logo.svg";
import globaleGymnasierLogo from "./assets/images/globale-gymnasier-logo.svg";
import danidaLogo from "./assets/images/danida-logo.svg";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Logo src={logo} alt="Verdensmålene" href="/" />
        <Navbar>
          <UnorderedList>
            <ListItem>
              <NavigationLink to="/">Verdensmålene</NavigationLink>
            </ListItem>
            <ListItem>
              <NavigationLink to="/undervisning">Undervisning</NavigationLink>
            </ListItem>
            <ListItem>
              <NavigationLink to="/byg-dit-eget-maal">
                Byg dit eget mål
              </NavigationLink>
            </ListItem>
            <ListItem>
              <NavigationLink to="/faq">FAQ</NavigationLink>
            </ListItem>
            <ListItem>
              <NavigationLink to="/kontakt">Kontakt os</NavigationLink>
            </ListItem>
            <LoginButton textValue="Login" />
          </UnorderedList>
        </Navbar>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/undervisning" element={<EducationPage />} />
          <Route path="/byg-dit-eget-maal" element={<CustomGoalPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Main>
      <Footer>
        <Logo src={undpLogo} alt="UNDP" href="https://www.undp.org/" newTab />
        <Logo
          src={msLogo}
          alt="Mellemfolkeligt Samvirke"
          href="https://www.globalaktion.dk/"
          newTab
        />
        <Logo
          src={globaleGymnasierLogo}
          alt="Globale Gymnasier"
          href="https://www.globalegymnasier.dk/"
          newTab
        />
        <Logo src={danidaLogo} alt="Danida" href="https://um.dk/danida" newTab />
      </Footer>
    </BrowserRouter>
  );
}

export default App;
