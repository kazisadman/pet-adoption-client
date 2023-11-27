import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Nav";
import Foot from "../Shared/Foot";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-3">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Foot></Foot>
    </div>
  );
};

export default Main;
