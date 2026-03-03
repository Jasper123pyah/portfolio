import './resume.scss'
import {useEffect, useState} from "react";
import {animate, inView, stagger} from "motion";

type TimelineType = 'work' | 'freelance' | 'education';

type TimelineItem = {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: TimelineType;
  details: string;
};

const Resume = () => {
  const isMobile = window.innerWidth < 1024;
  const [activeItemId, setActiveItemId] = useState<string | null>(isMobile ? 'elecho' : null);

  const timelineItems: TimelineItem[] = [
    {
      id: 'proforto',
      title: 'Automations Engineer',
      organization: 'Proforto',
      period: '2025 - now',
      type: 'work',
      details: 'Focused on improving processes across all departments through software and AI applications.'
    },
    {
      id: 'elecho',
      title: 'Fullstack Engineer',
      organization: 'Elecho',
      period: '2024 - now',
      type: 'work',
      details: 'Building web products with a focus on maintainable architecture, UX quality and performance.'
    },
    {
      id: 'webyx',
      title: 'Freelance Web Developer',
      organization: 'Webyx',
      period: '2023 - now',
      type: 'freelance',
      details: 'Delivering websites and digital solutions for clients from concept to deployment.'
    },
    {
      id: 'capgemini',
      title: 'Software Engineer Graduate Intern',
      organization: 'Capgemini',
      period: '2024',
      type: 'education',
      details: 'Graduation internship focused on real-world engineering practices within enterprise environments.'
    },
    {
      id: 'delta',
      title: 'Delta Excellence Student',
      organization: 'FHICT',
      period: '2022 - 2024',
      type: 'education',
      details: 'Honors trajectory centered on innovation, product quality and multidisciplinary collaboration.'
    },
    {
      id: 'indicia',
      title: 'Software Engineer',
      organization: 'INDICIA',
      period: '2022 - 2023',
      type: 'work',
      details: 'Worked on web applications and components in client-facing development projects.'
    },
    {
      id: 'care',
      title: 'Software Engineer',
      organization: 'CARE Internet Services',
      period: '2022',
      type: 'work',
      details: 'Contributed to software development and delivery in a professional agency setting.'
    },
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      organization: 'FHICT',
      period: '2020 - 2022',
      type: 'education',
      details: 'Built technical foundations in software design, development and teamwork.'
    },
    {
      id: 'social-work',
      title: 'Social Work',
      organization: 'Fontys University of Applied Sciences',
      period: '2017 - 2018',
      type: 'education',
      details: 'Developed communication and human-centered problem-solving skills.'
    },
    {
      id: 'law',
      title: 'Law',
      organization: 'JHS Tilburg',
      period: '2016 - 2017',
      type: 'education',
      details: 'Academic training focused on legal reasoning and structured analysis.'
    }
  ];

  useEffect(() => {
    if (!isMobile) {
      animate('#resume-item', {
        y: 40,
        opacity: 0
      });

      inView('#resume-timeline', () => {
        animate('#resume-item', {
          y: 0,
          opacity: 1
        }, {
          delay: stagger(0.08),
          duration: 0.45,
          easing: [.22, .03, .26, 1]
        })
      })
    }
  }, [isMobile])

  return <div className={'resume'}>
    <h4 id={'resume'}>
      Resume
    </h4>
    <h3 className={'resume__title'}>Timeline</h3>
    <div id={'resume-timeline'} className={'resume__timeline'}>
      {timelineItems.map((item: TimelineItem) => (
        <article
          id={'resume-item'}
          key={item.id}
          className={`resume-item resume-item--${item.type} ${isMobile && activeItemId === item.id ? 'is-active' : ''}`}
          onClick={isMobile ? () => setActiveItemId(item.id) : undefined}
        >
          <span className={'resume-item__period'}>{item.period}</span>
          <div className={'resume-item__card'}>
            <h4>{item.title}</h4>
            <p className={'resume-item__organization'}>{item.organization}</p>
            <p className={'resume-item__details'}>{item.details}</p>
          </div>
        </article>
      ))}
    </div>

  </div>
}

export default Resume;
