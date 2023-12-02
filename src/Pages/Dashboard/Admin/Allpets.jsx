import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Allpets = () => {
  const petsInfo = useLoaderData();
  const axiosPublic = useAxiosPublic();

  const handleAdopted = (_id) => {
    axiosPublic
      .patch(`/pets/${_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="w-96 lg:w-[700px]">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>pet Image</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          {petsInfo.map((petInfo) => (
            <Table.Body className="divide-y" key={petInfo._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>
                  <Avatar
                    img={petInfo.image}
                    rounded
                    bordered
                    className="placeholder-white"
                  />
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {petInfo.name}
                </Table.Cell>
                <Table.Cell>{petInfo.category}</Table.Cell>
                <Table.Cell>
                  {petInfo.adopted === "false" ? (
                    <Button
                      onClick={() => handleAdopted(petInfo._id)}
                      color="warning"
                    >
                      Not Adopted
                    </Button>
                  ) : (
                    <Button color="warning" disabled>
                      Adopted
                    </Button>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Button color="warning">Update</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default Allpets;
