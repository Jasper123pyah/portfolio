import projects from "../../projects.ts";
import './project.scss';
import {useNavigate, useParams} from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs";

const Project = () => {
  const {slug} = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.slug === slug);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -88; // Offset in pixels
      const top = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  const handleBackClick = () => {
    navigate("/");
    scrollTo('projects');
  }

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div className={`project`}>
      <div className="project__content">
        <div className="project__content-container">
          <a onClick={handleBackClick} className={"project__back-button"}>
            <BsArrowLeft/>
          </a>
          <div className={'project__head'}>
            <h4>
              {project.name}
            </h4>
          </div>

          <div className="project__body">
            <h3>
              {project.role}
            </h3>
            <p>
              {project.description}
            </p>
            {project.link && <p>{project.link}</p>}
            <div className={'project__images'}>
              {
                project.images.map((image: string) => (
                  <img key={image} className="project__image" src={`${image}`} alt={project.name}/>
                ))
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );

}
export default Project;