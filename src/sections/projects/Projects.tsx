import './projects.scss';
import PortfolioCarousel from './PortfolioCarousel.tsx';

const Projects = () => {
  return (
    <div id={'projects'} className="projects">
      <h4>Projects</h4>
      <h3 className="projects-title">Recent Works</h3>
      <div className={'empty-circle'}/>
      <PortfolioCarousel/>
    </div>
  );
};

export default Projects;
