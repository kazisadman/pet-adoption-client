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
import Error from "../Pages/Error";
import Mypets from "../Pages/Dashboard/Mypets";
import Updatepet from "../Pages/Dashboard/Updatepet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        loader: () => fetch("https://y-nine-sigma.vercel.app/pets"),
      },
      {
        path: "/donation-campaigns",
        element: <Donations></Donations>,
        loader: () => fetch("https://y-nine-sigma.vercel.app/pets"),
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
    path: "/dashboard/:email/",
    element: <Dashboard></Dashboard>,
    loader: () => fetch("https://y-nine-sigma.vercel.app/users"),
    errorElement: <Error></Error>,
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
        loader: () => fetch("https://y-nine-sigma.vercel.app/pets"),
      },
      {
        path: "added-pets",
        element: <Mypets></Mypets>,
        loader: () => fetch("https://y-nine-sigma.vercel.app/pets"),
      },
      {
        path: "update-pet",
        element: <Updatepet></Updatepet>,
        loader: () => fetch("https://y-nine-sigma.vercel.app/pets"),
      },
    ],
  },
]);
