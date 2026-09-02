import { LoaderSpinner, LoaderStyled, LoaderText } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderStyled>
      <LoaderSpinner />
      <LoaderText>Henter verdensmålene...</LoaderText>
    </LoaderStyled>
  );
};
