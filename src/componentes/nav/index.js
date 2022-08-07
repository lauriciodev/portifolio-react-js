import  * as C  from "./style";
import { Link } from "react-router-dom";
import { FaArrowLeft,FaInstagram } from "react-icons/fa";
import { useState } from 'react';

export const Nav = (props) =>{
  const [iconStatus, setIconStatus] = useState(false)

//iconToggle
const changeToggle = () =>{
  setIconStatus(!iconStatus)
  console.log(iconStatus)
}


  return(

    <C.Container 
    backGroundColorContainerSet={"#010d23"} 
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
      backgroundColorIconSet={"#038bbb"}
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
      maxWidthFotoContainerSet={"120"}
      >
        <img src={props.Foto} />

      </C.FotoContainer >
      <C.socialIcon href='https://instagram.com/mohamed_lau.sql' target="_blank" displaySocialLinkSet={iconStatus?"block":"none"}>mohamed_lau.sql <FaInstagram/> </C.socialIcon>


      <C.ContainerLinks displayContainerLinkSet={iconStatus?"flex":"none"}>
      <Link onClick={changeToggle} to="/">Home</Link>
      <Link onClick={changeToggle} to="/sobre">Sobre</Link>
      <Link onClick={changeToggle} to="/projetos">Projetos</Link>
      <Link onClick={changeToggle} to="/linguagens">Linguagens</Link>
      <Link onClick={changeToggle} to="/contato">Contato</Link>
      
      </C.ContainerLinks>

      
      
    
    </C.Container>
  )
}