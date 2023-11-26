import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Nav";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
