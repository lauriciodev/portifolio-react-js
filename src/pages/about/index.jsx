import { Link, Outlet } from "react-router-dom";
import { ContainerAbout, ContainerLinks } from "./styled";
import { Button } from "../../global/styles";

export default function About() {
  return (
    <ContainerAbout>
      <h1>Pagina sobre</h1>
      <ContainerLinks>
        <Link to="/about/history">História</Link>
        <Link to="/about/langs">Linguagens</Link>
      </ContainerLinks>
      <Outlet />
    </ContainerAbout>
  );
}
