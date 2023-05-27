import { useEffect, useState } from "react";
import ProjectsData from "./projects";
import {
  CardProjects,
  ContainerButtons,
  ContainerProjects,
  LinkProject,
} from "./styled";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectsPerPage, setProjectsPerpage] = useState(6);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(ProjectsData.length / projectsPerPage);

  useEffect(() => {
    handlePage(page);
  }, []);

  function handlePage(pageIndice) {
    let startProject = (pageIndice - 1) * projectsPerPage;
    let finalProject = startProject + projectsPerPage;

    let projectsIn = ProjectsData.slice(startProject, finalProject);
    setProjects(projectsIn);
    setPage(pageIndice + 1);
    console.log(page);
  }

  return (
    <>
      <ContainerProjects>
        {projects.map((project, index) => (
          <CardProjects key={index}>
            <p>{project.nome}</p>
            <img src={project.foto} alt="" />
            {project.online ? (
              <LinkProject href={project.link} target="_blank">
                Ver Online
              </LinkProject>
            ) : (
              <LinkProject href={project.link} target="_blank">
                Ver no Github
              </LinkProject>
            )}
          </CardProjects>
        ))}
      </ContainerProjects>

      <ContainerButtons>
        {projects.length >= projectsPerPage && (
          <LinkProject onClick={() => handlePage(page)}>
            Proxima pagina
          </LinkProject>
        )}

        {page > 2 && (
          <LinkProject onClick={() => handlePage(page - 2)}>voltar</LinkProject>
        )}
      </ContainerButtons>
    </>
  );
}
