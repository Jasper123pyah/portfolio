import Navbar from "./components/navbar/Navbar.tsx";
import Front from "./sections/front/Front.tsx";
import About from "./sections/about/About.tsx";
import Projects from "./sections/projects/Projects.tsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Project from "./components/project/Project.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Front/>
      <About/>
      <Projects/>
    </div>,
  },
  {
    path: "/project/:slug",
    element: <div>
      <Project/>
    </div>,
  }
]);

function App() {

  return (
    <>
      <Navbar/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
