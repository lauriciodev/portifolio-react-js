import { useEffect, useState } from "react";
import ProjectsData from "./projects";
import { CardProjects, ContainerProjects, LinkProject } from "./styled";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(ProjectsData);
  }, [projects]);
  return (
    <ContainerProjects>
      {projects.map((project) => (
        <CardProjects key={project.nome}>
          <p>{project.nome}</p>
          <img src={project.foto} alt="" />
          <LinkProject href={project.link}>Ver Projeto</LinkProject>
        </CardProjects>
      ))}
    </ContainerProjects>
  );
}
