import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { UnorderedList } from "./components/UnorderedList";
import { ListItem } from "./components/ListItem";
import { AnchorLink } from "./components/AnchorLink";
import { LoginButton } from "./components/LoginButton";
import { Logo } from "./components/Logo";
import { Container } from "./components/Container";

function App() {
  // #2BBBDE for Topbar
  return (
    <>
      <Header>
        <Container bgColor="#2BBBDE"></Container>
        <Logo src="./src/assets/Logo.svg" alt="Logo" />
        <Navbar display="flex">
          <UnorderedList padding="0" margin="0" display="flex" gap="5rem">
            <ListItem>
              <AnchorLink href="/">Verdensmålene</AnchorLink>
            </ListItem>
            <ListItem>
              <AnchorLink href="/">Undervisning</AnchorLink>
            </ListItem>
            <ListItem>
              <AnchorLink href="/">Byg dit eget mål</AnchorLink>
            </ListItem>
            <ListItem>
              <AnchorLink href="/">FAQ</AnchorLink>
            </ListItem>
            <ListItem>
              <AnchorLink href="/">Kontakt os</AnchorLink>
            </ListItem>
            <LoginButton textValue="Login" />
          </UnorderedList>
        </Navbar>
      </Header>
      <Main>
        <h1>Velkommen til Verdensmålene</h1>
      </Main>
      <Footer>
        <Logo src="./src/assets/images/undp-logo.svg" alt="Logo" />
        <Logo src="./src/assets/images/ms-logo.svg" alt="Logo" />
        <Logo src="./src/assets/images/globale-gymnasier-logo.svg" alt="Logo" />
        <Logo src="./src/assets/images/danida-logo.svg" alt="Logo" />
      </Footer>
    </>
  );
}

export default App;
