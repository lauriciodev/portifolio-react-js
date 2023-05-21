import { Link, Outlet } from "react-router-dom";
import { ContainerAbout, ContainerLinks, SubContainerAbout } from "./styled";
import { Button } from "../../global/styles";
import { FaOm } from "react-icons/fa";

export default function About() {
  return (
    <ContainerAbout>
      <SubContainerAbout>
        <h1>Pagina sobre</h1>
        <ContainerLinks>
          <Link to="/about">
            <FaOm />
          </Link>
          <Link to="/about/history">História</Link>
          <Link to="/about/langs">Linguagens</Link>
        </ContainerLinks>
      </SubContainerAbout>
      <Outlet />
    </ContainerAbout>
  );
}
