import  * as C  from "./style";
import { Link } from "react-router-dom";
import { FaToggleOff } from "react-icons/fa";

export const Nav = (props) =>{
  return(

    <C.Container 
    backGroundColorContainerSet={"#172c3c"} 
    heightContainerSet={"100"}
    widthContainerSet={"300"}
    displayContainerSet={"flex"}
    justifyContainerSet={"flex-start"}
    alignContainerSet={"center"}
    flexDirectionSer={"column"}
    gapContainerSet={"10"}
    paddingTopContainerSet={"20"}
    >
      <C.ContainerIcon 
      paddingLeftContainerIcons={"35"}
      widthContainerIconSet={"87"}
      displayContainerIconSet={"flex"}
      alignContainerIconSet={"center"}
      justifyContainerIconSet={"flex-end"}>
         <FaToggleOff/>
      </C.ContainerIcon>

      <C.FotoContainer widthFotoContainerSet={"100"} 
      maxWidthFotoContainerSet={"210"}
      >
        <img src={props.Foto} />

      </C.FotoContainer>
      
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/projetos">Projetos</Link>
      <Link to="/linguagems">Linguagems</Link>
      <Link to="/contato">Contato</Link>
    </C.Container>
  )
}