import PropTypes from "prop-types";
import { Card, Button } from "flowbite-react";
import { FaLocationDot } from "react-icons/fa6";
import { MdPets } from "react-icons/md";

const Petinfocard = ({ petInfo }) => {
  const { image, name, age, location } = petInfo;

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
        <Button color="warning">Details</Button>
      </Card>
    </div>
  );
};

Petinfocard.propTypes = {
  petInfo: PropTypes.object,
};

export default Petinfocard;
