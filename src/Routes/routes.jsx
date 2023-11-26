import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
]);
