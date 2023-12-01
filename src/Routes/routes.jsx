import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Pages/Home";
import Petlisting from "../Pages/Petlisting";
import Petdetails from "../Pages/Petdetails";
import Donations from "../Pages/Donations";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/pet-listing",
        element: <Petlisting></Petlisting>,
      },
      {
        path: "/pet-details/:id",
        element: <Petdetails></Petdetails>,
        loader: () => fetch("/allpets.json"),
      },
      {
        path: "/donation-campaigns",
        element: <Donations></Donations>,
        loader: () => fetch("/allpets.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
