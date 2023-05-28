import { Link, Outlet } from "react-router-dom";
import { ContainerAbout, ContainerLinks, SubContainerAbout } from "./styled";
import { Button } from "../../global/styles";

export default function About() {
  return (
    <ContainerAbout>
      <SubContainerAbout>
        <ContainerLinks>
          <Link to="/about">Sobre</Link>
          <Link to="/about/langs">Tecnologias</Link>
        </ContainerLinks>
      </SubContainerAbout>
      <Outlet />
    </ContainerAbout>
  );
}
