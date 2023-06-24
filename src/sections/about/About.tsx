import './about.scss'
import Card from "../../components/card/Card.tsx";
import {FiMonitor} from "react-icons/fi";
import {MdOutlineDesignServices} from "react-icons/md";
import {FaCat} from "react-icons/fa";

const About = () => {

  return (
    <div id={'about'} className={'about'}>
      <div className="about-heading">
        <h4>About me</h4>
      </div>
      <h3>
        Who I am
      </h3>
      <div className={'about-section'}>
        <div className={'about-description'}>
          <h4 className={'about-who__title'}>
            Hobbies
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrudo.
          </p>
        </div>
        <div className={'about-description'}>
          <h4 className={'about-who__title'}>
            Personality
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrudo.
          </p>
        </div>
        <div className={'about-description'}>
          <h4 className={'about-who__title'}>
            Ambitions
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrudo.
          </p>
        </div>
      </div>
      <h3>
        What I do
      </h3>
      <div className={'about-section'}>
        <div className={'about-description'}>
          <Card>
            <div className={'about-card__icon'}>
              <FaCat/>
            </div>
            <h4 className={'about-card__head'}>
              Branding
            </h4>
            <p className={'about-card__description'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </Card>
        </div>
        <div className={'about-description'}>
          <Card>
            <div className={'about-card__icon'}>
              <MdOutlineDesignServices/>
            </div>
            <h4 className={'about-card__head'}>
              Web Design
            </h4>
            <p className={'about-card__description'}>
              Lorem ipsum dolor
            </p>
          </Card>
        </div>
        <div className={'about-description'}>
          <Card>
            <div className={'about-card__icon'}>
              <FiMonitor/>
            </div>
            <h4 className={'about-card__head'}>
              Web Development
            </h4>
            <p className={'about-card__description'}>
              Responsive, fast, and dynamic web applications, inclusive, accessible, and SEO friendly.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default About;