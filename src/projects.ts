
// Glow
import glowThumbnail from './assets/images/glow-thumbnail.jpg';
import glowImg1 from './assets/images/glow1.jpg';
import glowImg2 from './assets/images/glow2.jpg';

//ICL
import indiciaImg from './assets/images/indicia.jpg';
import iclImg from './assets/images/icl.png';

// SimplePark
import simpleParkThumbnail from './assets/images/simple-park-logo.svg';
import simpleParkImg1 from './assets/images/simple-park1.svg';
import simpleParkImg2 from './assets/images/simple-park2.svg';

// Esther Lases
import esther1 from './assets/images/Esther.png';
import esther2 from './assets/images/Esther2.png';
import estherThumbnail from './assets/images/Esther-thumbnail.png';

// Quantified Student
import qsThumbNail from './assets/images/qstn.png';
import quantifiedStudentImg from './assets/images/quantified-student.png';

// TVFHD
import elechoThumbnail from './assets/images/elecho-thumbnail.svg';
import elechoImg from './assets/images/elecho.png';
import elechoImg2 from './assets/images/elecho2.png';

export type ProjectType = {
  name: string;
  role: string;
  description: string;
  images: string[];
  link: string;
  slug: string;
  thumbnail: string;
}

const projects: ProjectType[] = [
  {
    name: 'Elecho Website',
    role: 'Web developer',
    description: 'For my company Elecho I have created the website in NextJS. The website is created with a custom design and is fully responsive. Furthermore it is optimized for SEO, i18n and has a blog.',
    images: [elechoImg, elechoImg2],
    link: 'https://elecho.io',
    slug: 'elecho',
    thumbnail: elechoThumbnail
  },
  {
    name: 'Glow 2023',
    role: 'Lead Frontend Developer & Scrum Master',
    description: 'Glow is a yearly event in Eindhoven. For Glow 2023 our team created an AI powered application where we brought visitors together to create a collaborative art piece. During this project I have spent a lot of time learning UI and UX and how to work with AI tools like Stable Diffusion.',
    images: [glowImg1, glowImg2],
    link: 'https://gloweindhoven.nl/project/futures-of-glow-fontys-ict/',
    slug: 'glow',
    thumbnail: glowThumbnail
  },
  {
    name: 'INDICIA Component Library',
    role: 'Fullstack developer',
    description: 'The INDICIA Component Library is a React component library that can be used in PHP and React projects. I have worked on the component library as a fullstack developer. I have created several components and a bunch of scripts to have them work across all projects within the company alongside all required documentation.',
    images: [iclImg],
    link: 'https://indicia.nl',
    slug: 'icl',
    thumbnail: indiciaImg
  },
  {
    name: 'SimplePark',
    role: 'Mobile Designer & Fullstack developer',
    description: 'SimplePark is a mobile application that allows users to rent and hire parking spots in the city. For this project I have worked on the design of the application and the development of the backend and frontend.',
    images: [simpleParkImg1, simpleParkImg2],
    link: 'https://www.simplepark.nl/',
    slug: 'simplepark',
    thumbnail: simpleParkThumbnail
  },
  {
    name: 'Esther Lases',
    role: 'Fullstack developer',
    description: 'Esther is a life coach for people in their thirties. She came to me with the request to make her a new website. Esther was also my first client under my own company "Webyx".',
    images: [esther1, esther2],
    link: 'https://estherlases.com',
    slug: 'estherlases',
    thumbnail: estherThumbnail
  },
  {
    name: 'Quantified Student',
    role: 'UI Designer & researcher',
    description: 'Quantified student was a Delta project I worked on as frontend developer and researcher. For Quantified student I created a dashboard design for students to see all their personal data. This prototype was created with Adobe XD.',
    images: [quantifiedStudentImg],
    link: 'https://quantifiedstudent.nl',
    slug: 'quantified-student',
    thumbnail: qsThumbNail
  },
];

export default projects;