import { useEffect, useState } from "react";
import ProjectsData from "./projects";
import { CardProjects, ContainerProjects, LinkProject } from "./styled";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectsPerPage, setProjectsPerpage] = useState(3);
  const [page, setPage] = useState(0);
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    setProjects(ProjectsData);
  });

  function handleNextPage() {
    setAllProjects(projects);
    const nextPage = page + projectsPerPage;
    const nextProjects = allProjects.slice(
      nextPage,
      nextPage + projectsPerPage
    );
    console.log(allProjects);
    projects.push(...nextProjects);
    setProjects(projects);
    setPage(nextPage);
  }

  return (
    <ContainerProjects>
      {projects.map((project) => (
        <CardProjects key={project.nome}>
          <p>{project.nome}</p>
          <img src={project.foto} alt="" />
          <LinkProject href={project.link}>Ver Projeto</LinkProject>
        </CardProjects>
      ))}

      <button onClick={() => handleNextPage()}>Proxima pagina</button>
    </ContainerProjects>
  );
}
