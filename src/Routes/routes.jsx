import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Pages/Home";
import Petlisting from "../Pages/Petlisting";
import Petdetails from "../Pages/Petdetails";
import Donations from "../Pages/Donations";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Addpet from "../Pages/Dashboard/Addpet";
import Allusers from "../Pages/Dashboard/Admin/Allusers";
import Allpets from "../Pages/Dashboard/Admin/Allpets";

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
        loader: () => fetch("http://localhost:5000/pets"),
      },
      {
        path: "/donation-campaigns",
        element: <Donations></Donations>,
        loader: () => fetch("http://localhost:5000/pets"),
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
  // dashboard

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "add-pet",
        element: <Addpet></Addpet>,
      },
      {
        path: "all-users",
        element: <Allusers></Allusers>,
      },
      {
        path: "all-pets",
        element: <Allpets></Allpets>,
        loader: () => fetch("http://localhost:5000/pets"),
      },
    ],
  },
]);
