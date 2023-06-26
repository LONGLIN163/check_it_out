import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Surveys from "./pages/Surveys";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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