import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { MdPets } from "react-icons/md";
import { Card, Button, Label, Modal, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Authprovider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Petdetilscard = ({ selectedPetInfo }) => {
  const { image, name, age, location, _id } = selectedPetInfo;
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const handleAdoption = (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const phoneNumber = form.phoneNumber.value;

    const adoptUserInfo = {
      email: user.email,
      name: user.displayName,
      location: location,
      phoneNumber: phoneNumber,
      id: _id,
    };

    axiosPublic
      .post("/adoption", adoptUserInfo)
      .then((res) => {
        console.log(res);
        setOpenModal(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={image}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex justify-between items-center">
          <div>
            <FaLocationDot className="text-3xl"></FaLocationDot>
            <h2 className="text-2xl">{location}</h2>
          </div>
          <div>
            <MdPets className="text-2xl"></MdPets>
            <h2 className="text-2xl">{age} years</h2>
          </div>
        </div>
        {/* Modal for adoption */}
        <Button onClick={() => setOpenModal(true)}>Adopt</Button>
        <Modal
          show={openModal}
          size="md"
          popup
          onClose={() => setOpenModal(false)}
          onSubmit={handleAdoption}
        >
          <Modal.Header />
          <Modal.Body>
            <form onSubmit={handleAdoption}>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>

                {/* email block */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    defaultValue={user?.email}
                    placeholder="name@company.com"
                    disabled
                  />
                </div>

                {/* name block */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Your Name" />
                  </div>
                  <TextInput
                    id="name"
                    type="text"
                    defaultValue={user?.displayName}
                    disabled
                  />
                </div>

                {/* address block */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="address" value="Your address" />
                  </div>
                  <TextInput
                    id="address"
                    name="location"
                    type="text"
                    required
                  />
                </div>

                {/* number block */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="number" value="Your number" />
                  </div>
                  <TextInput
                    id="number"
                    name="phoneNumber"
                    type="number"
                    required
                  />
                </div>

                {/* submit button */}
                <div className="w-full">
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </Card>
    </div>
  );
};

Petdetilscard.propTypes = {
  selectedPetInfo: PropTypes.object,
};

export default Petdetilscard;
