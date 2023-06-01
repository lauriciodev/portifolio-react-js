import { Button } from "../../global/styles";
import curriculo from "../../assets/curriculo/curriculo.pdf";
import {
  FaCodepen,
  FaDownload,
  FaGithub,
  FaGitlab,
  FaLinkedin,
} from "react-icons/fa";
import {
  ButtonContact,
  Info,
  PictureContainer,
  ProfileContainer,
  SocialContainer,
} from "./styled";
import fotoLauricio from "../../assets/lauzim.gif";

export default function Profile() {
  return (
    <ProfileContainer>
      <PictureContainer>
        <img src={fotoLauricio} alt="lauricio" />
      </PictureContainer>
      <Info>
        <h1>Lauricio De Sousa</h1>
        <h3>Desenvolvedor Web FullStack</h3>
      </Info>
      <SocialContainer>
        <ButtonContact href="https://github.com/lauriciodev" target="_blank">
          <FaGithub />
        </ButtonContact>
        <ButtonContact href="https://gitlab.com/Lauricio" target="_blank">
          <FaGitlab />
        </ButtonContact>
        <ButtonContact
          href="https://www.linkedin.com/in/lauricio-de-sousa-776b04215/"
          target="_blank"
        >
          <FaLinkedin />
        </ButtonContact>
        <ButtonContact href="https://codepen.io/lauricio_dev" target="_blank">
          <FaCodepen />
        </ButtonContact>
      </SocialContainer>
      <ButtonContact
        href={curriculo}
        download={curriculo}
        typr="Aplication/pdf"
        target="_blank"
      >
        Baixar Currículo <FaDownload />
      </ButtonContact>
    </ProfileContainer>
  );
}
