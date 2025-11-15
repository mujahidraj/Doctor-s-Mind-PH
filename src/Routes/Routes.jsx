import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from "../Pages/Error/ErrorPage";
import Root from "../Pages/Root/Root";
import HomePage from "../Pages/Home/HomePage";
import Bookings from "../Pages/Bookings/Bookings";
import DoctorsInfo from "../Pages/DoctorsInfo/DoctorsInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        index:true ,
        loader : ()=>fetch('DoctorsData.json'),
        path : '/',
        Component : HomePage
      },
      {
        path : '/bookings',
        Component : Bookings
      },
      {
        path : '/doctors-info/:id',
        loader : ()=>fetch('DoctorsData.json'),
        Component : DoctorsInfo
      }

    ]
  },
]);