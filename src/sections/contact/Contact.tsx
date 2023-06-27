import './contact.scss';
import Card from "../../components/card/Card.tsx";
import {FiMail} from "react-icons/fi";
import {FaLinkedin} from "react-icons/fa";
import {AiFillPhone} from "react-icons/ai";

const Contact = () => {
  return (
    <div className={'contact'}>
      <h4 id={'contact'}>Contact</h4>
      <h3>
        Get In Touch
      </h3>
      <div className={'contact-cards'}>
        <Card>
          <div className={'contact-card__icon'}>
            <FiMail/>
          </div>
          <p className={'contact-card__name'}>
            EMAIL
          </p>
          <a className={'contact-card__info contact-card__info--mail'} href={'mailto:jaspermeiracker@gmail.com'}>
            jaspermeiracker@gmail.com
          </a>
        </Card>
        <Card>
          <div className={'contact-card__icon'}>
            <FaLinkedin/>
          </div>
          <p className={'contact-card__name'}>
            LINKEDIN
          </p>
          <a className={'contact-card__info contact-card__info--linkedin'} href={'https://www.linkedin.com/in/jaspervandenmeiracker'}>
            Jasper van den Meiracker
          </a>
        </Card>
        <Card>
          <div className={'contact-card__icon'}>
            <AiFillPhone/>
          </div>
          <p className={'contact-card__name'}>
            PHONE
          </p>
          <a className={'contact-card__info'} href={'tel:+31640869531'}>
            + 31 6 40869531
          </a>
        </Card>

      </div>
    </div>
  )
}
export default Contact;