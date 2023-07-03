import './contact.scss';
import Card from "../../components/card/Card.tsx";
import {FiMail} from "react-icons/fi";
import {FaLinkedin} from "react-icons/fa";
import {useEffect} from "react";
import {animate, inView, stagger} from "motion";
import delta from "../../assets/images/delta-cyan.svg";

const Contact = () => {

  useEffect(() => {
    animate('#contact-card', {
      opacity: 0,
      y: -200
    });

    inView('#contact-cards', () => {
      animate('#contact-card', {
        opacity: 1,
        y: 0
      }, {
        delay: stagger(0.3),
        duration: 0.5,
        easing: [.22, .03, .26, 1]
      })
    })
  }, [])

  return (
    <div className={'contact'}>
      <h4 id={'contact'}>Contact</h4>
      <h3>
        Get In Touch
      </h3>
      <div id={'contact-cards'} className={'contact-cards'}>
        <Card id={'contact-card'}>
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
        <Card id={'contact-card'}>
          <div className={'contact-card__icon'}>
            <FaLinkedin/>
          </div>
          <p className={'contact-card__name'}>
            LINKEDIN
          </p>
          <a className={'contact-card__info contact-card__info--linkedin'}
             href={'https://www.linkedin.com/in/jaspervandenmeiracker'}>
            Jasper van den Meiracker
          </a>
        </Card>
        <Card id={'contact-card'}>
          <div className={'contact-card__icon'}>
            <img style={{height:'60px'}} src={delta} alt={'delta'} className={'delta'}/>
          </div>
          <p className={'contact-card__name'}>
            DELTA
          </p>
          <a className={'contact-card__info'} href={'https://deltafhict.nl'}>
            https://deltafhict.nl
          </a>
        </Card>
      </div>
    </div>
  )
}
export default Contact;