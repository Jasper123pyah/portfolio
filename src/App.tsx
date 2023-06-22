import Navbar from "./components/navbar/Navbar.tsx";
import Front from "./sections/front/Front.tsx";
import About from "./sections/about/About.tsx";
import Projects from "./sections/projects/Projects.tsx";

function App() {

  return (
    <>
      <Navbar/>
      <Front/>
      <About/>
      <Projects/>
    </>
  )
}

export default App
