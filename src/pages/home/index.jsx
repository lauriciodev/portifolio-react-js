/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaDownload, FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa'
import { 
  ContainerHome, 
  ContainerFotoHome, 
  TitleContainer, 
  ContainerButtons 
} from "./style"
import Foto from "../../assets/img/lauricio.jpg";

export const Home = () =>{
  return(
    <ContainerHome>
    <ContainerFotoHome>
     <img src={Foto} alt="lauricio"/>
    </ContainerFotoHome>
      <TitleContainer>
        <h1>Laurício De Souza</h1>
        <h5>Web Developer </h5>
      </TitleContainer>

      <ContainerButtons>
        <a href="#" rel="noreferrer"><FaGithub/></a>
        <a href="#" rel="noreferrer"><FaGitlab/></a>
        <a href="#" rel="noreferrer"><FaLinkedin/></a>
        <a href="#" rel="noreferrer">Download CV <FaDownload/></a>
      </ContainerButtons>
    </ContainerHome>
   
  )
}