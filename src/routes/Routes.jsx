import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Root from "../layout/Root";
import Register from "../pages/register/Register";
import Error from "../layout/Error";
import Details from "../pages/details/Details";
import About from "../pages/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services/:id",
        element: <Details></Details>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
