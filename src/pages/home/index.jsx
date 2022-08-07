import { FaDownload, FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa'
import * as C from "./style"

export const Home = (props) =>{
  return(
    <C.ContainerHome>
    <C.ContainerFotoHome>
     <img src={props.foto} alt="lauricio"/>
    </C.ContainerFotoHome>
      <C.TitleContainer>
        <h1>Laurício De Souza</h1>
        <h5>Web Developer </h5>
      </C.TitleContainer>

      <C.ContainerButtons>
        <a href="#"><FaGithub/></a>
        <a href="#"><FaGitlab/></a>
        <a href="#"><FaLinkedin/></a>
        <a href="#">Download CV <FaDownload/></a>
      </C.ContainerButtons>
    </C.ContainerHome>
   
  )
}