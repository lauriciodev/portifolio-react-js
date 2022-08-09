import { Nav } from "./componentes/nav";
import Global from "./GlobalStyle";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";
import Foto from "./assets/img/lauricio.jpg";
import FotoSobre from "./assets/img/laug1.jpg";
import { Contato } from "./pages/contato";
import { Projetos } from "./pages/sobre/projetos";
import { Historia } from "./pages/sobre/historia";
import { Linguagens } from "./pages/sobre/linguagens";

function App() {
  const flexContainer = {
    display: "flex",
  };
  return (
    <div style={flexContainer}>

      <Nav Foto={Foto} />

      <Routes>
        <Route path="/" element={<Home foto={Foto} />} />
        <Route path="sobre/*" element={<Sobre FotoSobre={FotoSobre} />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Global />
    </div>
  );
}

export default App;
