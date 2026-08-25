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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
