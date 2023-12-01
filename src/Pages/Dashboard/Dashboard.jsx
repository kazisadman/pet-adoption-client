import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { PiDogFill } from "react-icons/pi";
import { FaListUl } from "react-icons/fa";
import { VscRequestChanges } from "react-icons/vsc";
import { FaDollarSign, FaHandHoldingDollar } from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";
import { Outlet } from "react-router-dom";
import Nav from "../../Shared/Nav";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Nav></Nav>
      <div className="flex flex-col md:flex-row ">
        <div>
          <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Link to={"add-pet"}>
                  <Sidebar.Item icon={PiDogFill}>Add a pet</Sidebar.Item>
                </Link>
                <Link to={"added-pets"}>
                  <Sidebar.Item icon={FaListUl}>My added pets</Sidebar.Item>
                </Link>
                <Link to={"adoption-request"}>
                  <Sidebar.Item icon={VscRequestChanges}>
                    Adoption request
                  </Sidebar.Item>
                </Link>
                <Link to={"create-capaign"}>
                  <Sidebar.Item icon={FaDollarSign}>
                    Create campaign
                  </Sidebar.Item>
                </Link>
                <Link to={"my-campaigns"}>
                  <Sidebar.Item icon={MdCampaign}>My campaigns</Sidebar.Item>
                </Link>
                <Link to={"my-donations"}>
                  <Sidebar.Item icon={FaHandHoldingDollar}>
                    My donations
                  </Sidebar.Item>
                </Link>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        <div className="max-w-4xl mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
