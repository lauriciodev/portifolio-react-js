import { Button } from "../../global/styles";
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
        <FaGithub />
        <FaGitlab />
        <FaLinkedin />
        <FaCodepen />
      </SocialContainer>
      <ButtonContact
        href="https://api.whatsapp.com/send/?phone=5598984867618&text&app_absent=0"
        target="_blank"
      >
        Baixar Currículo <FaDownload />
      </ButtonContact>
    </ProfileContainer>
  );
}
