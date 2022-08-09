import { Link } from "react-router-dom";
import  {
  Container,
  ContainerButtons,
}  from "./style";

export const Sobre = () => {
  return(
    <Container>
       <ContainerButtons>
            <Link to="sobre/historia">Historia</Link>
            <Link to="sobre/projetos">Projetos</Link>
            <Link to="sobre/linguagens">Linguagens</Link>
        </ContainerButtons>
    </Container>
        
  )
}