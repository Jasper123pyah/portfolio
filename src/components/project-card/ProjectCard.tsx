import React from 'react';
import './project-card.scss';
import { Project } from '../../projects.ts';
type ProjectCardProps = {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.images[0]} alt={project.name}/>
      <div className="project-details">
        <h4>{project.name}</h4>
        <p>{project.role}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
