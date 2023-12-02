import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from "../assets/image/Logo.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Authprovider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

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
      {!user && (
        <NavLink to={"/login"}>
          <Navbar.Link>Login/Register</Navbar.Link>
        </NavLink>
      )}
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
            label={<Avatar alt="User settings" img={user?.photoURL} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <NavLink to={"/dashboard"}>
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </NavLink>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>{links}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
