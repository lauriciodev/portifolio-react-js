import { Button } from "../../global/styles";
import {
  ButtonContact,
  Info,
  PictureContainer,
  ProfileContainer,
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
      <ButtonContact
        href="https://api.whatsapp.com/send/?phone=5598984867618&text&app_absent=0"
        target="_blank"
      >
        Entrar em contato
      </ButtonContact>
    </ProfileContainer>
  );
}
