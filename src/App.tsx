import { BrowserRouter, NavLink } from "react-router-dom";
import { Header } from "./components/organisms/Header/Header";
import { Main } from "./components/templates/Main/Main";
import { Footer } from "./components/organisms/Footer/Footer";
import { Navbar } from "./components/organisms/Navbar/Navbar";
import { UnorderedList } from "./components/atoms/UnorderedList/UnorderedList";
import { ListItem } from "./components/atoms/ListItem/ListItem";
import { LoginButton } from "./components/atoms/LoginButton/LoginButton";
import { Logo } from "./components/molecules/Logo/Logo";
import { AppRouter } from "./router/AppRouter";
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
              <NavLink to="/" end>
                Verdensmålene
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/undervisning" end>
                Undervisning
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/byg-dit-eget-maal" end>
                Byg dit eget mål
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/faq" end>
                FAQ
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/kontakt" end>
                Kontakt os
              </NavLink>
            </ListItem>
            <LoginButton textValue="Login" />
          </UnorderedList>
        </Navbar>
      </Header>
      <Main>
        <AppRouter />
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
