import './projects.scss'
import ProjectCard from "../../components/project-card/ProjectCard.tsx";
import projects, {Project} from "../../projects.ts";
const Projects = () => {

  return <div className={'projects'}>
    <h4>
      Projects
    </h4>
    <h3 className={'projects-title'}>
      Recent Works
    </h3>
    <div className={"projects-grid"}>
      {
        projects.map((project: Project) => {
          return <ProjectCard project={project}/>
        })
      }
    </div>
  </div>
}

export default Projects;