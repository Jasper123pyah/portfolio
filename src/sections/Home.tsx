import {Fragment, useEffect} from 'react';
import Front from "./front/Front";
import About from "./about/About";
import Projects from "./projects/Projects";
import Resume from "./resume/Resume.tsx";
import Contact from "./contact/Contact.tsx";
import Navbar from "../components/navbar/Navbar.tsx";

type HomeProps = {
  shouldScrollToProjects: boolean;
  setShouldScrollToProjects: (shouldScrollToProjects: boolean) => void;
}
export default function Home({shouldScrollToProjects, setShouldScrollToProjects}: HomeProps) {
  useEffect(() => {
    if (shouldScrollToProjects) {
      const element = document.getElementById('projects');
      if (element) {
        const offset = -88; // Offset in pixels
        const top = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({top, behavior: 'smooth'});
      }
      setShouldScrollToProjects(false);
    }
  }, [shouldScrollToProjects]);

  return (<Fragment>
    <Navbar/>
    <Front/>
    <About/>
    <Projects/>
    <Resume/>
    <Contact/>
  </Fragment>)
}
