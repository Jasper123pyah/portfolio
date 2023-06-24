import {Project} from "../../projects.ts";
import './modal.scss';

type ModalProps = {
  project: Project;
  onClose: () => void;
}
const Modal = ({project, onClose}: ModalProps) => {


  return (
    <div className={`modal ${project ? 'is-open' : ''}`}>
      <div className="modal__overlay" onClick={onClose}/>
      <div className="modal__content">
        <div className="modal__content-container">
          <button className="modal__close" onClick={onClose}>

          </button>
          <h4>
            {project.name}
          </h4>
        </div>
      </div>
    </div>
  );

}
export default Modal;