import './about.scss'
import Card from "../../components/card/Card.tsx";
import {FiMonitor} from "react-icons/fi";
import {MdOutlineDesignServices} from "react-icons/md";
import {FaCat} from "react-icons/fa";
import {animate, stagger, inView} from "motion"
import {useEffect} from "react";

const About = () => {

  useEffect(() => {
    animate('#whoiam-part', {
      y: +400,
      opacity: 0
    });

    animate('#whatido-part', {
      y: +400,
      opacity: 0
    });

    inView('#whoiam', () => {
      animate('#whoiam-part', {
        y: 0,
        opacity: 1
      }, {
        delay: stagger(0.3),
        duration: 0.5,
        easing: [.22, .03, .26, 1]
      })
    })

    inView('#whatido', () => {
      animate('#whatido-part', {
        y: 0,
        opacity: 1
      }, {
        delay: stagger(0.3),
        duration: 0.5,
        easing: [.22, .03, .26, 1]
      })
    })
  }, [])


  return (
    <div id={'about'} className={'about'}>
      <h4>About me</h4>
      <h3>
        Who I am
      </h3>
      <div id={'whoiam'} className={'about-section'}>
        <div id={'whoiam-part'} className={'about-description'}>
          <h4 className={'about-who__title'}>
            Personality
          </h4>
          <p>
            As a social, creative and ambitious person, I love to learn new things and am always looking for new
            fields within IT to explore. I am a team player with a very open personality who's always ready to help
            others.
          </p>
        </div>
        <div id={'whoiam-part'} className={'about-description'}>
          <h4 className={'about-who__title'}>
            Ambitions
          </h4>
          <p>
            I love to explore the sophisticated world of user experience and user interface design. AI has also taken up
            my interest which is taking up a lot of my time. I strive to be a diversified developer with a focus on user
            experience.
          </p>
        </div>
        <div id={'whoiam-part'} className={'about-description'}>
          <h4 className={'about-who__title'}>
            Hobbies
          </h4>
          <p>
            My hobbies consist of playing video games, chess, exploring fun restaurants and I love to hang around with
            my pets. I also like to work out and create web applications and designs in my spare time.
          </p>
        </div>
      </div>
      <h3>
        What I do
      </h3>
      <div id={'whatido'} className={'about-section'}>
        <div id={'whatido-part'} className={'about-description'}>
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
        <div id={'whatido-part'} className={'about-description'}>
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
        <div id={'whatido-part'} className={'about-description'}>
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