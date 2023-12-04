import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const Mypets = () => {
  const petsInfo = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const { email } = useParams();
  const [filterPets, setFilterPets] = useState([]);

  useEffect(() => {
    const filterPets = petsInfo.filter((petInfo) => petInfo.email === email);
    setFilterPets(filterPets);
  }, [email, petsInfo]);

  const handleAdopted = (_id) => {
    axiosPublic
      .patch(`/pets/${_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleDelete = (_id) => {
    axiosPublic
      .delete(`/pets/${_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="w-96 lg:w-[700px]">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Serial Number</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>pet Image</Table.HeadCell>
            <Table.HeadCell>Adoption</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          {filterPets.map((filterPet, index) => (
            <Table.Body className="divide-y" key={filterPet._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{index + 1}</Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {filterPet.name}
                </Table.Cell>
                <Table.Cell>{filterPet.category}</Table.Cell>
                <Table.Cell>
                  <Avatar
                    img={filterPet.image}
                    rounded
                    bordered
                    className="placeholder-white"
                  />
                </Table.Cell>

                <Table.Cell>
                  {filterPet.adopted === "false" ? (
                    <h2
                    //   onClick={() => handleAdopted(filterPet._id)}
                    >
                      Not Adopted
                    </h2>
                  ) : (
                    <h2>Adopted</h2>
                  )}
                </Table.Cell>
                <div className="flex flex-col justify-center items-center">
                  <Table.Cell>
                    {filterPet.adopted === "false" ? (
                      <Button
                        color="warning"
                        onClick={() => handleAdopted(filterPet._id)}
                      >
                        Not Adopted
                      </Button>
                    ) : (
                      <Button disabled>Adopted</Button>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/update-pet`}>
                      <Button color="warning">Update</Button>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      color="warning"
                      onClick={() => handleDelete(filterPet._id)}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </div>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default Mypets;
