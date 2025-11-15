import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from "../Pages/Error/ErrorPage";
import Root from "../Pages/Root/Root";
import HomePage from "../Pages/Home/HomePage";
import Bookings from "../Pages/Bookings/Bookings";
import DoctorsInfo from "../Pages/DoctorsInfo/DoctorsInfo";
import Blogs from "../Pages/Blogs/Blogs";

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
        loader : ()=>fetch('DoctorsData.json'),
        Component : Bookings
      },
      {
        path : '/doctors-info/:id',
        loader : ()=>fetch('DoctorsData.json'),
        Component : DoctorsInfo
      },
      {
        path : '/blogs',
        loader : ()=>fetch('blogs.json'),
        Component : Blogs
      }

    ]
  },
]);