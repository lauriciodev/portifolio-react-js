import  * as C  from "./style";
import { Link } from "react-router-dom";
import { FaArrowLeft,FaInstagram } from "react-icons/fa";
import { useState } from 'react';

export const Nav = (props) =>{
  const [iconStatus, setIconStatus] = useState(true)

//iconToggle
const changeToggle = () =>{
  setIconStatus(!iconStatus)
  console.log(iconStatus)
}


  return(

    <C.Container 
    backGroundColorContainerSet={"#a1c4c1"} 
    heightContainerSet={"100"}
    widthContainerSet={iconStatus?"300":"0"}
    displayContainerSet={"flex"}
    justifyContainerSet={"flex-start"}
    alignContainerSet={"center"}
    flexDirectionSer={"column"}
    gapContainerSet={"10"}
    paddingTopContainerSet={"20"}
    >
      <C.ContainerIcon 
      onClick={
        changeToggle
      }
      backgroundColorIconSet={"#063940"}
      rotateIconSet={iconStatus?"0":"180"}
      widthContainerIconSet={"40"}
      heightContainerIconSet={"40"}
      displayContainerIconSet={"flex"}
      alignContainerIconSet={"center"}
      justifyContainerIconSet={"center"}>
         < FaArrowLeft/>
      </C.ContainerIcon>

      <C.FotoContainer displayFotoContainerSet={iconStatus?"block":"none"} 
      widthFotoContainerSet={"100"} 
      maxWidthFotoContainerSet={"210"}
      >
        <img src={props.Foto} />

      </C.FotoContainer >
      <C.socialIcon displaySocialLinkSet={iconStatus?"block":"none"}>mohamed_lau.sql <FaInstagram/> </C.socialIcon>


      <C.ContainerLinks displayContainerLinkSet={iconStatus?"flex":"none"}>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/projetos">Projetos</Link>
      <Link to="/linguagens">Linguagens</Link>
      <Link to="/contato">Contato</Link>
      
      </C.ContainerLinks>

      
      
    
    </C.Container>
  )
}