import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
    errorElement : <ErrorPage></ErrorPage>
  },
]);