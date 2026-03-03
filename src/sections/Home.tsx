import {Fragment} from 'react';
import Front from "./front/Front";
import About from "./about/About";
import Projects from "./projects/Projects";
import Resume from "./resume/Resume.tsx";
import Contact from "./contact/Contact.tsx";
import Navbar from "../components/navbar/Navbar.tsx";

export default function Home() {
  return (<Fragment>
    <Navbar/>
    <Front/>
    <About/>
    <Projects/>
    <Resume/>
    <Contact/>
  </Fragment>)
}
