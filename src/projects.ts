
// Glow
import glowThumbnail from './assets/images/glow-thumbnail.jpg';
import glowImg1 from './assets/images/glow1.jpg';
import glowImg2 from './assets/images/glow2.jpg';

//ICL
import indiciaImg from './assets/images/indicia.jpg';
import iclImg from './assets/images/icl.png';

// Parkonaut
import parkonautThumbnail from './assets/images/parkonaut-thumbnail.jpg';
import parkonautImg1 from './assets/images/parkonaut1.jpg';
import parkonautImg2 from './assets/images/parkonaut2.jpg';

// Voldaan
import voldaanImg1 from './assets/images/voldaan.png';
import voldaanImg2 from './assets/images/voldaanss.png';

// Quantified Student
import qsThumbNail from './assets/images/qstn.png';
import quantifiedStudentImg from './assets/images/quantified-student.png';

// ASAM
import asamImg from './assets/images/asam.png';

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
    name: 'Parkonaut',
    role: 'Mobile Designer & Fullstack developer',
    description: 'Parkonaut is a mobile application that allows users to rent and hire parking spots in the city. For this project I have worked on the design of the application and the development of the backend and frontend.',
    images: [parkonautImg1, parkonautImg2],
    link: '',
    slug: 'parkonaut',
    thumbnail: parkonautThumbnail
  },
  {
    name: 'Factuurvoldaan',
    role: 'Frontend developer',
    description: 'Factuurvoldaan is a client of INDICIA that requested a new website. At INDICIA I have worked on the new website for Factuurvoldaan. I was mostly involved in the frontend development, but I also added several backend features within WordPress.',
    images: [voldaanImg2],
    link: 'https://factuurvoldaan.nl',
    slug: 'factuurvoldaan',
    thumbnail: voldaanImg1
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
  {
    name: 'ASAM',
    role: 'Teamlead & cyber security analist',
    description: 'ASAM is a tool for students on FHICT to find an internship with partners of the university. For this project I was the teamlead and cyber security analist.',
    images: [],
    link: 'https://asam.fhict.nl',
    slug: 'asam',
    thumbnail: asamImg
  },
];

export default projects;