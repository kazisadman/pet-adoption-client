import PropTypes from "prop-types";

const Heading = ({ heading, subHeading }) => {
  return (
    <div className="flex justify-center items-center text-center my-4">
      <div className="border-b-4 border-[#FFB400]">
        <p className="uppercase">{subHeading}</p>
        <h1 className="text-4xl font-extrabold uppercase text-[#FFB400]">
          {heading}
        </h1>
      </div>
    </div>
  );
};

Heading.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default Heading;
