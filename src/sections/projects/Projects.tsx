import './projects.scss'
import ProjectCard from "../../components/project-card/ProjectCard.tsx";

const Projects = () => {

  const project = {
    name: 'Project 1',
    role: 'Role 1',
    description: 'Description 1',
    image: 'https://via.placeholder.com/150',
    link: 'https://via.placeholder.com/150'
  }

  return <div>
    <h4>
      Projects
    </h4>
    <h3>
      Recent Works
    </h3>
    <div className={"projects-grid"}>
      <ProjectCard project={project} />
      <ProjectCard project={project} />

      <ProjectCard project={project} />

    </div>
  </div>
}

export default Projects;