import  * as C  from "./style";
import { Link } from "react-router-dom";

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
      <C.FotoContainer widthFotoContainerSet={"100"} 
      maxWidthFotoContainerSet={"210"}
      >
        <img src={props.Foto} />

      </C.FotoContainer>
      
      <Link to="/sobre">sobre</Link>
      <Link to="/sobre">sobre</Link>
      <Link to="/sobre">sobre</Link>
      <Link to="/sobre">sobre</Link>
      <Link to="/sobre">sobre</Link>
    </C.Container>
  )
}