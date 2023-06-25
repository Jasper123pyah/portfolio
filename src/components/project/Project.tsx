import projects from "../../projects.ts";
import './project.scss';
import {useNavigate, useParams} from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs";
import {useEffect} from "react";

type ProjectProps = {
  setShouldScrollToProjects: (shouldScrollToProjects: boolean) => void;
}
const Project = ({setShouldScrollToProjects}: ProjectProps) => {
  const {slug} = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/');
    setShouldScrollToProjects(true);
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
          <div className="project__body">
            <div>
              <h4 className={'project__head'}>
                {project.name}
              </h4>
              <h3>
                {project.role}
              </h3>
              <p className={'project__description'}>
                {project.description}
              </p>
              {project.link && <a href={project.link} target={'_blank'} className={'project__link'}>{project.link}</a>}
            </div>
            <div className={'project__thumbnail'}>
              <img src={project.thumbnail} alt={project.name}/>
            </div>

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