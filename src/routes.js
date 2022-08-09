import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";
import { Contato } from "./pages/contato";
import { Projetos } from "./pages/sobre/projetos";
import { Historia } from "./pages/sobre/historia";
import { Linguagens } from "./pages/sobre/linguagens";

function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre/*" element={<Sobre />} />
        <Route path='sobre/projetos' element={<Projetos />}/>
        <Route path='sobre/historia' element={<Historia />}/>
        <Route path='sobre/linguagens' element={<Linguagens />}/>
        <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}

export default Routers;
