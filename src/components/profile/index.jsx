import { Button } from "../../global/styles";
import { Info, PictureContainer, ProfileContainer } from "./styled";
import fotoLauricio from "../../assets/lauricio.jpg";

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
      <Button>Entrar em contato</Button>
    </ProfileContainer>
  );
}
