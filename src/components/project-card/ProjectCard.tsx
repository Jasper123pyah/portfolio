import React from 'react';
import './project-card.scss';

type Project = {
  name: string;
  role: string;
  description: string;
  image: string;
  link: string;
}

type ProjectCardProps = {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name}/>
      <div className="project-details">
        <h4>{project.name}</h4>
        <p>{project.role}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
