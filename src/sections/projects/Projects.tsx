import './projects.scss';
import ProjectCard from '../../components/project-card/ProjectCard.tsx';
import projects, {ProjectType} from '../../projects.ts';

const Projects = () => {

  return (
    <div id={'projects'} className="projects">
      <h4>Projects</h4>
      <h3 className="projects-title">Recent Works</h3>
      <div className="projects-grid">
        {projects.map((project: ProjectType) => (
          <ProjectCard key={project.name} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
