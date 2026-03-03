import './about.scss'
import Card from "../../components/card/Card.tsx";
import {FiMonitor} from "react-icons/fi";
import {MdOutlineDesignServices} from "react-icons/md";
import {FaCogs} from "react-icons/fa";
import {animate, stagger, inView} from "motion"
import {ReactNode, useEffect} from "react";

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

  const FilledCard = ({title, description, icon}: { title: string, description: string, icon: ReactNode }) => {
    return (
      <div id={'whatido-part'} className={'about-description'}>
        <Card>
          <div className={'about-card__icon'}>
            {icon}
          </div>
          <h4 className={'about-card__head'}>
            {title}
          </h4>
          <p className={'about-card__description'}>
            {description}
          </p>
        </Card>
      </div>
    )
  }

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
          <p className={'about-who__text'}>
            I am a pragmatic and curious builder who likes to turn complex ideas into practical solutions.
            I work best in fast-moving environments where I can combine technical depth with clear communication
            and ownership.
          </p>
        </div>
        <div id={'whoiam-part'} className={'about-description'}>
          <h4 className={'about-who__title'}>
            Ambitions
          </h4>
          <p className={'about-who__text'}>
            My ambition with Elecho is to help founders turn ideas into validated MVPs and scalable products.
            I focus on AI and automation to remove bottlenecks, speed up execution and build practical software
            with real business impact.
          </p>
        </div>
        <div id={'whoiam-part'} className={'about-description'}>
          <h4 className={'about-who__title'}>
            Hobbies
          </h4>
          <p className={'about-who__text'}>
            Outside work I enjoy chess, fitness, gaming and exploring new places to eat.
            In my spare time I also prototype AI ideas and build small tools to experiment with automation.
          </p>
        </div>
        <div className={'about-square'}/>
      </div>
      <h3>
        What I do
      </h3>
      <div id={'whatido'} className={'about-section'}>
        {FilledCard({
          title: 'Engineering',
          icon: <FaCogs/>,
          description: 'Analysing, designing, and developing software solutions to support business processes.'
        })}
        {FilledCard({
          title: 'AI & Automations',
          icon: <MdOutlineDesignServices/>,
          description: 'AI-driven automations that improve workflows across companies and reduce repetitive work.'
        })}
        {FilledCard({
          title: 'Web Development',
          icon: <FiMonitor/>,
          description: 'Responsive, fast, and dynamic web applications that are inclusive, accessible, and SEO friendly.'
        })}
      </div>
    </div>
  )
}
export default About;
