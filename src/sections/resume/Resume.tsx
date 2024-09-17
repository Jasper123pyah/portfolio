import './resume.scss'
import Card from "../../components/card/Card.tsx";
import {useEffect} from "react";
import {animate, inView} from "motion";

const Resume = () => {
  const isMobile = window.innerWidth < 1024;

  useEffect(() => {
    if (!isMobile) {
      animate('#resume-card', {
        y: +100,
        x: +200,
        opacity: 0
      });

      inView('#resume-card', () => {
        animate('#resume-card', {
          x: 0,
          y: 0,
          opacity: 1
        }, {
          duration: 0.5,
          easing: [.22, .03, .26, 1]
        })
      })
    }
  }, [isMobile])


  const FilledCard = ({job, company, year}: { job: string, company: string, year: string }) => {
    return <div id={'resume-card'} className={'resume-card'}>
      <Card>
        <div className={'resume-card__content'}>
          <h3>
            {job}
          </h3>
          <h4>
            {company}
          </h4>
          <p>
            {year}
          </p>
        </div>
      </Card>
    </div>
  }
  return <div className={'resume'}>
    <h4 id={'resume'}>
      Resume
    </h4>
    <div className={'resume__container'}>
      <div id={'resume-job'} className={'resume__section'}>
        <h3>Job Experience</h3>
        <h4>
          2018 - now
        </h4>
        <div className={'resume__cards'}>
          {
            FilledCard({
                job: 'Fullstack Engineer',
                company: 'Elecho',
                year: '2024 - now'
              }
            )
          }
          {
            FilledCard({
                job: 'Freelance Web Developer',
                company: 'Webyx',
                year: '2023 - now'
              }
            )
          }
          {
            FilledCard({
                job: 'Software Engineer Graduate Intern',
                company: 'Capgemini',
                year: '2024'
              }
            )
          }
          {
            FilledCard({
                job: 'Software Engineer',
                company: 'INDICIA',
                year: '2022 - 2023'
              }
            )
          }
          {
            FilledCard({
                job: 'Software Engineer',
                company: 'CARE Internet Services',
                year: '2022'
              }
            )
          }
        </div>
      </div>
      <div id={'resume-education'} className={'resume__section'}>
        <h3>
          Education
        </h3>
        <h4>
          2016 - now
        </h4>
        <div className={'resume__cards'}>
          {
            FilledCard({
                job: 'Delta Excellence Student',
                company: 'FHICT',
                year: '2022 - 2024'
              }
            )
          }
          {
            FilledCard({
                job: 'Software Engineering',
                company: 'FHICT',
                year: '2020 - 2022'
              }
            )
          }
          {
            FilledCard({
                job: 'Social Work',
                company: 'Fontys University of Applied Sciences',
                year: '2017-2018'
              }
            )
          }
          {
            FilledCard({
                job: 'Law',
                company: 'JHS Tilburg',
                year: '2016-2017'
              }
            )
          }
        </div>
      </div>
    </div>

  </div>
}

export default Resume;
