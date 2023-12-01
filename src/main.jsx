import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/routes";
import { HelmetProvider } from "react-helmet-async";
import Authprovider from "./context/Authprovider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Authprovider>
  </React.StrictMode>
);
