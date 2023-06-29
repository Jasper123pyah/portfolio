import React from 'react';
import './project-card.scss';
import {ProjectType} from '../../projects.ts';
import {useNavigate} from 'react-router-dom';

type ProjectCardProps = {
  project: ProjectType;
};

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.slug}`);
  }

  return (
    <div id={'project-card'} onClick={handleClick} className="project-card">
      <img className="project-card__image" src={`${project.thumbnail}`} alt={project.name}/>
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
