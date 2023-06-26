import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Surveys from "./page/Surveys";
import Login from "./page/Login";
import Signup from "./page/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/surveys",
    element: <Surveys />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  }
]);

export default router;