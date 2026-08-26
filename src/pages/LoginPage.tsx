import { ContentWrapper } from "../components/templates/ContentWrapper/ContentWrapper";
import { LoginForm } from "../components/organisms/LoginForm/LoginForm";

export const LoginPage = () => {
  return (
    <ContentWrapper
      title="Login"
      description="Log ind på Verdensmålene.dk med din email og adgangskode."
    >
      <p>
        Indtast din email og adgangskode og klik login for at logge ind. Din
        email er dit brugernavn.
      </p>

      <LoginForm />
    </ContentWrapper>
  );
};
