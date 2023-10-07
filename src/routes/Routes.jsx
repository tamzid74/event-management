import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Root from "../layout/Root";
import Register from "../pages/register/Register";
import Error from "../layout/Error";
import Details from "../pages/details/Details";
import About from "../pages/about/About";
import PrivateRoutes from "./PrivateRoutes";
import Booked from "../pages/booked/Booked";
import Gallery from "../pages/gallery/Gallery";

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
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: () => fetch("/services.json"),
      },
      {
        path:"/gallery",
        element:<PrivateRoutes><Gallery></Gallery></PrivateRoutes>
      },
      {
        path:"/booking",
        element:<PrivateRoutes><Booked></Booked></PrivateRoutes>
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
