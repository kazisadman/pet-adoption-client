import PropTypes from "prop-types";
import { Card, Button } from "flowbite-react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Donationscard = ({ petInfo }) => {
  const { _id, image, name, maximum_Donation_Amount, donated_Amount } = petInfo;

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
            <FaMoneyBillAlt className="text-3xl"></FaMoneyBillAlt>
            <h2 className="text-2xl">$ {maximum_Donation_Amount}</h2>
          </div>
          <div>
            <FaMoneyBillTransfer className="text-3xl"></FaMoneyBillTransfer>
            <h2 className="text-2xl">$ {donated_Amount}</h2>
          </div>
        </div>
        <Link to={`/pet-details/${_id}`}>
          <Button color="warning">Details</Button>
        </Link>
      </Card>
    </div>
  );
};

Donationscard.propTypes = {
  petInfo: PropTypes.object,
};

export default Donationscard;
