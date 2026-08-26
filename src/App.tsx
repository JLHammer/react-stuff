import { BrowserRouter } from "react-router-dom";
import { SkipLink } from "./components/atoms/SkipLink/SkipLink";
import { Header } from "./components/organisms/Header/Header";
import { Navbar } from "./components/organisms/Navbar/Navbar";
import { NavbarLink } from "./components/atoms/NavbarLink/NavbarLink";
import { Footer } from "./components/organisms/Footer/Footer";
import { Main } from "./components/templates/Main/Main";
import { UnorderedList } from "./components/atoms/UnorderedList/UnorderedList";
import { ListItem } from "./components/atoms/ListItem/ListItem";
import { Logo } from "./components/molecules/Logo/Logo";
import { AppRouter } from "./router/AppRouter";
import logo from "./assets/Logo.svg";

function App() {
  return (
    <BrowserRouter>
      <SkipLink href="#indhold">Spring til indhold</SkipLink>

      <Header>
        <Logo
          src={logo}
          alt="FN's Verdensmål for bæredygtig udvikling"
          href="/"
        />
        <Navbar>
          <UnorderedList>
            <ListItem>
              <NavbarLink to="/">Verdensmålene</NavbarLink>
            </ListItem>
            <ListItem>
              <NavbarLink to="/undervisning">Undervisning</NavbarLink>
            </ListItem>
            <ListItem>
              <NavbarLink to="/byg-dit-eget-maal">Byg dit eget mål</NavbarLink>
            </ListItem>
            <ListItem>
              <NavbarLink to="/faq">FAQ</NavbarLink>
            </ListItem>
            <ListItem>
              <NavbarLink to="/kontakt">Kontakt os</NavbarLink>
            </ListItem>
            <ListItem>
              <NavbarLink to="/login">Login</NavbarLink>
            </ListItem>
          </UnorderedList>
        </Navbar>
      </Header>
      <Main id="indhold">
        <AppRouter />
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
