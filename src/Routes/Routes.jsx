import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from "../Pages/Error/ErrorPage";
import Root from "../Pages/Root/Root";
import HomePage from "../Pages/Home/HomePage";

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
      }
    ]
  },
]);