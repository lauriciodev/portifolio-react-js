/* eslint-disable jsx-a11y/alt-text */
import { 
  Container,
  ContainerIcon,
  ContainerLinks,
  FotoContainer,
  SocialIcon
}  from "./style";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaInstagram } from "react-icons/fa";
import { useState } from 'react';
import Foto from "../../assets/img/lauricio.jpg";

export const Nav = (props) =>{
  const [iconStatus, setIconStatus] = useState(false)

//iconToggle
const changeToggle = () =>{
  setIconStatus(!iconStatus)
  console.log(iconStatus)
}


  return(

    <Container
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
      <ContainerIcon 
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
      </ContainerIcon>

      <FotoContainer displayFotoContainerSet={iconStatus?"block":"none"} 
      widthFotoContainerSet={"100"} 
      maxWidthFotoContainerSet={"120"}
      >
        <img src={Foto} />

      </FotoContainer >
      <SocialIcon href='https://instagram.com/mohamed_lau.sql' target="_blank" displaySocialLinkSet={iconStatus?"block":"none"}>mohamed_lau.sql <FaInstagram/> </SocialIcon>


      <ContainerLinks displayContainerLinkSet={iconStatus?"flex":"none"}>
      <Link onClick={changeToggle} to="/">Home</Link>
      <Link onClick={changeToggle} to="/sobre">Sobre</Link>
      <Link onClick={changeToggle} to="/contato">Contato</Link>
      
      </ContainerLinks>

      
      
    
    </Container>
  )
}