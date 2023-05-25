import { useEffect, useState } from "react";
import ProjectsData from "./projects";
import { CardProjects, ContainerProjects, LinkProject } from "./styled";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectsPerPage, setProjectsPerpage] = useState(8);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(ProjectsData.length / projectsPerPage);

  useEffect(() => {
    handleNextPage(page);
  }, []);

  function handleNextPage(pageIndice) {
    let startProject = (pageIndice - 1) * projectsPerPage;
    let finalProject = startProject + projectsPerPage;

    let projectsIn = ProjectsData.slice(startProject, finalProject);
    setProjects(projectsIn);
    setPage(pageIndice + 1);
    console.log(page);
  }

  return (
    <ContainerProjects>
      {projects.map((project, index) => (
        <CardProjects key={index}>
          <p>{project.nome}</p>
          <img src={project.foto} alt="" />
          <LinkProject href={project.link}>Ver Projeto</LinkProject>
        </CardProjects>
      ))}

      {projects.length >= projectsPerPage && (
        <button onClick={() => handleNextPage(page)}>Proxima pagina</button>
      )}

      {page != 1 && (
        <button onClick={() => handleNextPage(page - 2)}>voltar</button>
      )}
    </ContainerProjects>
  );
}
