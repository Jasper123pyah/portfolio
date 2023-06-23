export type Project = {
  name: string;
  role: string;
  description: string;
  images: string[];
  link: string;
}

const projects: Project[] = [
  {
    name: 'Factuurvoldaan',
    role: 'Frontend developer',
    description: 'Factuurvoldaan is a client of INDICIA that requested a new website. At INDICIA I have worked on the new website for Factuurvoldaan. I was mostly involved in the frontend development, but I also added several backend features within WordPress.',
    images: ['voldaan.png', "voldaanss.png"],
    link: 'https://factuurvoldaan.nl'
  },
  {
    name: 'ASAM',
    role: 'Teamlead & cyber security analist',
    description: 'ASAM is a tool for students on FHICT to find an internship with partners of the university. For this project I was the teamlead and cyber security analist.',
    images: ['asam.png'],
    link: 'https://asam.fhict.nl'
  },
  {
    name: 'Quantified Student',
    role: 'Frontend developer & researcher',
    description: 'Quantified student was a Delta project I worked on as frontend developer and researcher. For Quantified student I created a dashboard ',
    images: ['qs-logo.png','quantified-student.png'],
    link: 'https://quantifiedstudent.nl'
  },
  {
    name: 'INDICIA Component Library',
    role: 'Fullstack developer',
    description: 'The INDICIA Component Library is a library of components that can be used in projects. I have worked on the component library as a fullstack developer. I have created several components and added them to the library. I have also created a website for the component library.',
    images: ['icl.png'],
    link: 'https://indicia.nl'
  },
  {
    name: 'Kings Court',
    role: 'Project Lead & Fullstack developer',
    description: 'Kings Court is a project I worked on as a fullstack developer. For Kings Court I have created a website and a backend. The website is an application to play chess with other people and AI bots. The backend is made in .NET Core and the frontend is made in React.',
    images: ['kingscourt.png'],
    link: 'https://kings-court.nl'
  },
  {
    name: 'Glow 2023',
    role: 'Lead Frontend Developer & Scrum Master',
    description: 'Glow is a yearly event in Eindhoven. For Glow 2023 our team created an AI powered application where we brought visitors together to create a collaborative art piece.',
    images: ['glow.png'],
    link: 'https://gloweindhoven' +
      '.nl'
  }
];

export default projects;
// ICL
// Kings Court
// Glow