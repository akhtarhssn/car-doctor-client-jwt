import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Book from "../Pages/Book/Book";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

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
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-ten-psi.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "booking/:id",
        element: (
          <PrivateRoute>
            <Book />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-ten-psi.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "bookings/",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/services",
      //   element: <Services />,
      // },
    ],
    errorElement: "error",
  },
]);

export default router;
