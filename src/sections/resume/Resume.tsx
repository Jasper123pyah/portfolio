import './resume.scss'
import Card from "../../components/card/Card.tsx";

const Resume = () => {

  return <div className={'resume'}>
    <h4 id={'resume'}>
      Resume
    </h4>
    <div className={'resume__container'}>
      <div className={'resume__section'}>
        <h3>Job Experience</h3>
        <h4>
          2016 - 2023
        </h4>
        <div className={'resume__cards'}>
          <div className={'resume-card'}>
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
          <div className={'resume-card'}>
            <Card>
              yo
            </Card>
          </div>
          <div className={'resume-card'}>
            <Card>
              yo
            </Card>
          </div>
        </div>
      </div>
      <div className={'resume__section'}>
        <h3>
          Education
        </h3>
        <h4>
          2016 - 2023
        </h4>
        <div className={'resume__cards'}>
          <div className={'resume-card'}>
            <Card>
              yo
            </Card>
          </div>
          <div className={'resume-card'}>
            <Card>
              yo
            </Card>
          </div>
          <div className={'resume-card'}>
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