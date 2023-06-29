import './resume.scss'
import Card from "../../components/card/Card.tsx";
import {useEffect} from "react";
import {animate, inView, stagger} from "motion";

const Resume = () => {

  useEffect(() => {
    animate('#resume-card', {
      x: +200,
      opacity: 0
    });

    inView('#resume-job', () => {
      animate('#resume-card', {
        x: 0,
        opacity: 1
      }, {
        delay: stagger(0.3),
        duration: 0.5,
        easing: [.22, .03, .26, 1]
      })
    })

    inView('#resume-education', () => {
      animate('#resume-card', {
        x: 0,
        opacity: 1
      }, {
        delay: stagger(0.3),
        duration: 0.5,
        easing: [.22, .03, .26, 1]
      })
    })
  }, [])

  return <div className={'resume'}>
    <h4 id={'resume'}>
      Resume
    </h4>
    <div className={'resume__container'}>
      <div id={'resume-job'} className={'resume__section'}>
        <h3>Job Experience</h3>
        <h4>
          2016 - 2023
        </h4>
        <div className={'resume__cards'}>
          <div id={'resume-card'} className={'resume-card'}>
            <Card>
              <div className={'resume-card__content'}>
                <h3>
                  Software Engineer
                </h3>
                <h4>
                  INDICIA
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
            </Card>
          </div>
          <div id={'resume-card'} className={'resume-card'}>
            <Card>
              yo
            </Card>
          </div>
          <div id={'resume-card'} className={'resume-card'}>
            <Card>
              yo
            </Card>
          </div>
        </div>
      </div>
      <div id={'resume-education'} className={'resume__section'}>
        <h3>
          Education
        </h3>
        <h4>
          2016 - 2023
        </h4>
        <div className={'resume__cards'}>
          <div id={'resume-card'} className={'resume-card'}>
            <Card>
              yo
            </Card>
          </div>
          <div id={'resume-card'} className={'resume-card'}>
            <Card>
              yo
            </Card>
          </div>
          <div id={'resume-card'} className={'resume-card'}>
            <Card>
              yo
            </Card>
          </div>
        </div>
      </div>
    </div>

  </div>
}

export default Resume;