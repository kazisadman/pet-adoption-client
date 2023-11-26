import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from "../assets/image/Logo.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = (
    <>
      <NavLink to={"/"}>
        <Navbar.Link>Home</Navbar.Link>
      </NavLink>
      <NavLink to={"/pet-listing"}>
        <Navbar.Link>Pet Listing</Navbar.Link>
      </NavLink>
      <NavLink to={"/donation-campaigns"}>
        <Navbar.Link>Donation Campaigns</Navbar.Link>
      </NavLink>
      <NavLink to={"/login"}>
        <Navbar.Link>Login/Register</Navbar.Link>
      </NavLink>
    </>
  );
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src={Logo}
            className="mr-3 h-20 sm:h-20"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Pet Harmony
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <NavLink to={"/dashboard"}>
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </NavLink>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>{links}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
