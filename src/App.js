import { Nav } from "./componentes/nav";
import  Global from "./GlobalStyle";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Sobre } from './pages/sobre';
import Foto from "./assets/img/lauricio.jpg";
import FotoSobre from "./assets/img/laug1.jpg";
import { Projetos } from './pages/projetos';
import { Linguagens } from './pages/linguagens';
import { Contato } from './pages/contato';

function App() {

  const flexContainer = {
    display:"flex"
  }
  return (
    <div style={flexContainer}>
      <Nav Foto={Foto}/>
   
     <Routes>
      <Route path='/' element={<Home foto={Foto} />}/>
      <Route path='/sobre' element={<Sobre FotoSobre={FotoSobre}/>}/>
      <Route path='/projetos' element={<Projetos/>}/>
      <Route path='/linguagens' element={<Linguagens/>}/>
      <Route path='/contato' element={<Contato/>}/>
     </Routes>


      <Global/>
    </div>

  );
}

export default App;
