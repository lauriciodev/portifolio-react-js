import { useState } from 'react'
import { Route, Routes, Link} from "react-router-dom";
import { Linguagens } from './linguagens';
import { Historia } from './historia';
import { Projetos } from './projetos';
import  * as C  from "./style";

export const Sobre = (props) => {
  
  const [intern, setIntern] = useState(false);
  
  return(
    <C.Container>
       <C.ContainerButtons>
            <Link to="sobre/historia">Historia</Link>
            <Link to="sobre/projetos">Projetos</Link>
            <Link to="sobre/linguagens">Linguagens</Link>
        </C.ContainerButtons>
      
           
         <Routes>
           <Route path='sobre/projetos' element={<Projetos/>}/>
           <Route path='sobre/historia' element={<Historia FotoSobre={props.FotoSobre}/>}/>
           <Route path='sobre/linguagens' element={<Linguagens/>}/>
          </Routes>

    </C.Container>
        
  )
}