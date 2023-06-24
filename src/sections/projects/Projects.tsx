import {useState} from 'react';
import './projects.scss';
import ProjectCard from '../../components/project-card/ProjectCard.tsx';
import projects, {ProjectType} from '../../projects.ts';
import Project from '../../components/project/Project.tsx';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <div id={'projects'} className="projects">
      <h4>Projects</h4>
      <h3 className="projects-title">Recent Works</h3>
      <div className="projects-grid">
        {projects.map((project: ProjectType) => (
          <ProjectCard key={project.name} setProject={() => setSelectedProject(project)} project={project}/>
        ))}
      </div>
      {selectedProject && (
        <Project project={selectedProject}/>
      )}
    </div>
  );
};

export default Projects;
