import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Project from "./components/project/Project.tsx";
import {useState} from "react";
import Home from "./sections/Home.tsx";

function App() {
  const [shouldScrollToProjects, setShouldScrollToProjects] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Home shouldScrollToProjects={shouldScrollToProjects} setShouldScrollToProjects={setShouldScrollToProjects}/>
      </div>,
    },
    {
      path: "/project/:slug",
      element: <div>
        <Project setShouldScrollToProjects={setShouldScrollToProjects}/>
      </div>,
    }
  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
