import axios from "axios";
import { useEffect } from "react";
import proj1 from "../../assets/projects/proj1.png";
import proj2 from "../../assets/projects/proj2.png";
import proj3 from "../../assets/projects/proj3.png";
import proj4 from "../../assets/projects/proj4.png";
import proj6 from "../../assets/projects/proj6.png";
import proj7 from "../../assets/projects/proj7.png";
import { CardProjects, ContainerProjects, LinkProject } from "./styled";

export default function Projects() {
  return (
    <ContainerProjects>
      <CardProjects>
        <img src={proj1} alt="" />
        <LinkProject>Ver Projeto</LinkProject>
      </CardProjects>
      <CardProjects>
        <img src={proj2} alt="" />
        <LinkProject>Ver Projeto</LinkProject>
      </CardProjects>
      <CardProjects>
        <img src={proj3} alt="" />
        <LinkProject>Ver Projeto</LinkProject>
      </CardProjects>
      <CardProjects>
        <img src={proj4} alt="" />
        <LinkProject>Ver Projeto</LinkProject>
      </CardProjects>
      <CardProjects>
        <img src={proj6} alt="" />
        <LinkProject>Ver Projeto</LinkProject>
      </CardProjects>
      <CardProjects>
        <img src={proj7} alt="" />
        <LinkProject>Ver Projeto</LinkProject>
      </CardProjects>
    </ContainerProjects>
  );
}
