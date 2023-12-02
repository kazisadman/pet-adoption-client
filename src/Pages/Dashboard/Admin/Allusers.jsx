import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { useState, useEffect } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Allusers = () => {
  const [usersInfo, setusersInfo] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setusersInfo(data));
  }, []);

  const handleMakeAdmin = (_id) => {
    axiosPublic
      .patch(`/users/${_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>User Image</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          {usersInfo.map((userInfo) => (
            <Table.Body className="divide-y" key={userInfo._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>
                  <Avatar
                    img={userInfo.image}
                    rounded
                    bordered
                    className="placeholder-white"
                  />
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {userInfo.name}
                </Table.Cell>
                <Table.Cell>{userInfo.email}</Table.Cell>
                <Table.Cell>
                  {userInfo.role === "user" ? (
                    <Button
                      onClick={() => handleMakeAdmin(userInfo._id)}
                      color="warning"
                    >
                      Admin
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleMakeAdmin(userInfo._id)}
                      color="warning"
                      disabled
                    >
                      user
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default Allusers;
