
// Glow
import glowThumbnail from './assets/images/portfolio/glow-thumbnail.jpg';

// Taste of Home
import tasteOfHomeImg from './assets/images/portfolio/taste-of-home.webp';
// Rayven Recordings
import rayvenRecordingsImg from './assets/images/portfolio/rayvenrecordings.webp';
import rayvenRecordingsThumbnail from './assets/images/portfolio/rayvenrecordings-thumbnail.webp';
// Gabz Hair
import gabzHairThumbnail from './assets/images/portfolio/gabz-hair-thumbnail.webp';
import gabzHairImg from './assets/images/portfolio/gabz-hair.webp';

// SimplePark
import simpleParkThumbnail from './assets/images/portfolio/simple-park.webp';

// Elecho
import elechoThumbnail from './assets/images/portfolio/elecho-thumbnail.webp';
import elechoImg from './assets/images/portfolio/elecho.png';

// PERSPEX
import perspexThumbnail from './assets/images/portfolio/perspex-thumbnail.webp';

// Meowi
import meowiThumbnail from './assets/images/portfolio/meowi.svg';
import meowiImg from './assets/images/portfolio/meowi1.png';

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
    role: 'Web Developer',
    description: 'For my company Elecho I have created the website in NextJS. The website is created with a custom design and is fully responsive. Furthermore it is optimized for SEO, i18n and has a blog.',
    images: [elechoImg],
    link: 'https://elecho.io',
    slug: 'elecho',
    thumbnail: elechoThumbnail
  },
  {
    name: 'PERSPEX',
    role: 'Fullstack Developer',
    description: 'PERSPEX is a project I made under Elecho. PERSPEX is a medical platform that enables medical experts to safely share and discuss patient cases. The backend is made in .NET and the frontend is made in React.',
    images: [perspexThumbnail],
    link: 'https://perspex.health',
    slug: 'perspex',
    thumbnail: perspexThumbnail
  },
  {
    name: 'Taste of Home',
    role: 'Web Developer',
    description: 'A clean brand website experience designed to communicate concept, atmosphere and offer with clear navigation and strong visual hierarchy.',
    images: [tasteOfHomeImg],
    link: 'https://elecho.io/portfolio/case-taste-of-home',
    slug: 'taste-of-home',
    thumbnail: tasteOfHomeImg
  },
  {
    name: 'Rayven Recordings',
    role: 'Web Developer',
    description: 'A site structure tailored for artist content, releases and discoverability while keeping editing and publishing workflows lightweight.',
    images: [rayvenRecordingsImg],
    link: 'https://elecho.io/portfolio/case-rayven-recordings',
    slug: 'rayven-recordings',
    thumbnail: rayvenRecordingsThumbnail
  },
  {
    name: 'Gabz Hair',
    role: 'Web Developer',
    description: 'A modern service website aimed at clear service communication, trust and appointment-ready user flows.',
    images: [gabzHairImg],
    link: 'https://elecho.io/portfolio/case-gabz-hair',
    slug: 'gabz-hair',
    thumbnail: gabzHairThumbnail
  },
  {
    name: 'Meowi',
    role: 'Fullstack Developer',
    description: 'Meowi was my graduation project at Capgemini. Meowi is a testing platform that enables synchronous mobile testing. The backend is made in .NET and the frontend is made in Blazor.',
    images: [meowiImg],
    link: '',
    slug: 'meowi',
    thumbnail: meowiThumbnail
  },
  {
    name: 'Glow 2023',
    role: 'Lead Frontend Developer & Scrum Master',
    description: 'Glow is a yearly event in Eindhoven. For Glow 2023 our team created an AI powered application where we brought visitors together to create a collaborative art piece. During this project I have spent a lot of time learning UI and UX and how to work with AI tools like Stable Diffusion.',
    images: [glowThumbnail],
    link: 'https://gloweindhoven.nl/project/futures-of-glow-fontys-ict/',
    slug: 'glow',
    thumbnail: glowThumbnail
  },
  {
    name: 'SimplePark',
    role: 'Mobile Designer & Fullstack developer',
    description: 'SimplePark is a mobile application that allows users to rent and hire parking spots in the city. For this project I have worked on the design of the application and the development of the backend and frontend.',
    images: [simpleParkThumbnail],
    link: 'https://www.simplepark.nl/',
    slug: 'simplepark',
    thumbnail: simpleParkThumbnail
  },
];

export default projects;
