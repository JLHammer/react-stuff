import { Container } from "./Container";
import { Button } from "./Button";

export const Main = () => {
  return (
    <main>
      <Container padding="20" bgColor="lightgray" />
      <Button textValue="Click Me" disabled={false} count={0} />
    </main>
  );
};
