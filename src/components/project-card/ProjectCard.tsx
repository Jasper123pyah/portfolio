import React from 'react';
import './project-card.scss';
import { Project } from '../../projects.ts';

type ProjectCardProps = {
  project: Project;
  setProject: (project: Project) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, setProject }) => {
  const handleClick = () => {
    setProject(project);
  };

  return (
    <div onClick={handleClick} className="project-card">
      <img className="project-card__image" src={`src/assets/images/${project.images[0]}`} alt={project.name} />
      <div className="project-card__details">
        <div className="project-card__details-container">
          <h4>{project.name}</h4>
          <p>{project.role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
