import { Header } from "./components/layout/Header/Header";
import { Main } from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { TopBar } from "./components/layout/TopBar/TopBar";
import { UnorderedList } from "./components/content/UnorderedList/UnorderedList";
import { ListItem } from "./components/content/ListItem/ListItem";
import { AnchorLink } from "./components/content/AnchorLink/AnchorLink";
import { LoginButton } from "./components/content/LoginButton/LoginButton";
import { Logo } from "./components/content/Logo/Logo";
import { ContentWrapper } from "./components/content/ContentWrapper/ContentWrapper";

function App() {
  return (
    <ContentWrapper>
      <TopBar />
      <Header>
        <Logo src="./src/assets/Logo.svg" alt="Verdensmålene" href="/" />
        <Navbar $display="flex">
          <UnorderedList $display="flex" $gap="5rem">
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
        <Logo
          src="./src/assets/images/undp-logo.svg"
          alt="UNDP"
          href="https://www.undp.org/"
          newTab
        />
        <Logo
          src="./src/assets/images/ms-logo.svg"
          alt="Mellemfolkeligt Samvirke"
          href="https://www.globalaktion.dk/"
          newTab
        />
        <Logo
          src="./src/assets/images/globale-gymnasier-logo.svg"
          alt="Globale Gymnasier"
          href="https://www.globalegymnasier.dk/"
          newTab
        />
        <Logo
          src="./src/assets/images/danida-logo.svg"
          alt="Danida"
          href="https://um.dk/danida"
          newTab
        />
      </Footer>
    </ContentWrapper>
  );
}

export default App;
