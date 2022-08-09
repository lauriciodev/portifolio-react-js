import { Nav } from "./componentes/nav";
import Global, { Container } from "./GlobalStyle";
import Routers from "./routes";

function App() {
  return (
    <Container displayContainerSet="flex">

      <Nav />

      <Routers />

      <Global />
    </Container>
  );
}

export default App;
