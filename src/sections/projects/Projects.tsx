import './projects.scss';
import ProjectCard from '../../components/project-card/ProjectCard.tsx';
import projects, {ProjectType} from '../../projects.ts';
import {useEffect} from "react";
import {animate, inView, stagger} from "motion";

const Projects = () => {
  const isMobile = window.innerWidth < 1024;


  useEffect(() => {
    if (!isMobile) {
      animate('#project-card', {
        opacity: 0,
        transform: "rotate(45deg)"
      });

      inView('#projects-grid', () => {
        animate('#project-card', {
          opacity: 1,
          transform: "rotate(0deg)"
        }, {
          delay: stagger(0.3),
          duration: 0.5,
          easing: [.22, .03, .26, 1]
        })
      })
    }
  }, [isMobile])

  return (
    <div id={'projects'} className="projects">
      <h4>Projects</h4>
      <h3 className="projects-title">Recent Works</h3>
      <div className={'empty-circle'}/>
      <div className={'square'}/>
      <div id={'projects-grid'} className="projects-grid">
        {projects.map((project: ProjectType) => (
          <ProjectCard key={project.name} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
