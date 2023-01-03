import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/main/Main";
import WriteThought from "../pages/Dashboard/WriteThought";
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
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "dashboard",
        element: <WriteThought />,
      },
      {
        path: "writeThought",
        element: <WriteThought />,
      },
    ],
  },
]);
export default router;
