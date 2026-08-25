import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/organisms/Header/Header";
import { Main } from "./components/templates/Main/Main";
import { Footer } from "./components/organisms/Footer/Footer";
import { Navbar } from "./components/organisms/Navbar/Navbar";
import { NavbarLink } from "./components/organisms/Navbar/NavbarLink";
import { UnorderedList } from "./components/atoms/UnorderedList/UnorderedList";
import { ListItem } from "./components/atoms/ListItem/ListItem";
import { LoginButton } from "./components/atoms/LoginButton/LoginButton";
import { Logo } from "./components/molecules/Logo/Logo";
import { AppRouter } from "./router/AppRouter";
import logo from "./assets/Logo.svg";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Logo src={logo} alt="Verdensmålene" href="/" />
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
              <LoginButton textValue="Login" />
            </ListItem>
          </UnorderedList>
        </Navbar>
      </Header>
      <Main>
        <AppRouter />
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
