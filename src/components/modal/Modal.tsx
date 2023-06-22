
type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <div className={`modal ${isOpen ? 'is-open' : ''}`}>
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__content">{children}</div>
    </div>
  );
}

export default Modal;