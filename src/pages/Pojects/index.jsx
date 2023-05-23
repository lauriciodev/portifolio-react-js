import { useEffect, useState } from "react";
import ProjectsData from "./projects";
import { CardProjects, ContainerProjects, LinkProject } from "./styled";

export default function Projects() {
  const [projects, setProjects] = useState(ProjectsData);
  const [projectsPerPage, setProjectsPerpage] = useState(3);
  const [page, setPage] = useState(0);
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {}, []);

  function handleNextPage() {
    setAllProjects(ProjectsData);
    const nextPage = page + projectsPerPage;
    const nextProjects = allProjects.slice(
      nextPage,
      nextPage + projectsPerPage
    );
    projects.push(...nextProjects);

    setProjects(projects);
    setPage(nextPage);

    console.log("proxima pagina>" + nextPage);
    console.log("pagina atual>" + page);
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
