import { createBrowserRouter } from "react-router-dom";
import ThoughtForm from "../component/ThoughtForm";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/main/Main";
import AllThought from "../pages/Dashboard/AllThought";
import About from "../pages/Main/About";
import Home from "../pages/Main/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <ThoughtForm />,
      },
      {
        path: "writeThought",
        element: <ThoughtForm />,
      },
      {
        path: "allThought",
        element: <AllThought />,
      },
      {
        path: "allThought/editThought/:id",
        element: <ThoughtForm />,
      },
    ],
  },
]);
export default router;
