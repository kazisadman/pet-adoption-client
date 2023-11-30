import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { MdPets } from "react-icons/md";
import { Card, Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

const Petdetilscard = ({ selectedPetInfo }) => {
  const { image, name, age, location } = selectedPetInfo;
  const [openModal, setOpenModal] = useState(false);

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
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>

              {/* email block */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput id="email" placeholder="name@company.com" required />
              </div>

              {/* name block */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your Name" />
                </div>
                <TextInput id="name" type="text" required />
              </div>

              {/* address block */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="address" value="Your address" />
                </div>
                <TextInput id="address" type="text" required />
              </div>

              {/* number block */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="number" value="Your number" />
                </div>
                <TextInput id="number" type="number" required />
              </div>

              {/* submit button */}
              <div className="w-full">
                <Button>Submit</Button>
              </div>
            </div>
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
