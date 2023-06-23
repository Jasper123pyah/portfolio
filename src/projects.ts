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
    images: ['voldaan.png'],
    link: 'https://factuurvoldaan.nl'
  },
  {
    name: 'ASAM',
    role: 'Teamlead and cyber security analist',
    description: 'ASAM is a tool for students on FHICT to find an internship with partners of the university. For this project I was the teamlead and cyber security analist.',
    images: ['asam.png'],
    link: 'https://asam.fhict.nl'
  },
  {
    name: 'Quantified Student',
    role: 'Frontend developer and researcher',
    description: 'Quantified student was a Delta project I worked on as frontend developer and researcher. For Quantified student I created a dashboard ',
    images: ['quantified-student.png'],
    link: 'https://quantifiedstudent.nl'
  },

];

export default projects;
// ICL
// Kings Court
// Glow