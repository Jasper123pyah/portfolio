import {useState} from 'react';
import './projects.scss';
import ProjectCard from '../../components/project-card/ProjectCard.tsx';
import projects, {Project} from '../../projects.ts';
import Modal from '../../components/modal/Modal.tsx';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      <h4>Projects</h4>
      <h3 className="projects-title">Recent Works</h3>
      <div className="projects-grid">
        {projects.map((project: Project) => (
          <ProjectCard key={project.name} setProject={() => setSelectedProject(project)} project={project}/>
        ))}
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal}/>
      )}
    </div>
  );
};

export default Projects;
