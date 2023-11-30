import { useEffect, useState } from "react";
import Petdetilscard from "../Components/Petdetails/Petdetilscard";
import { useLoaderData, useParams } from "react-router-dom";

const Petdetails = () => {
  const petsInfo = useLoaderData();

  const [selectedPetInfo, setSelectedPetInfo] = useState("");

  //   console.log(selectedPetInfo);

  const { id } = useParams();

  useEffect(() => {
    const exist = petsInfo.find((petInfo) => petInfo._id === id);
    console.log(exist);

    if (exist) {
      setSelectedPetInfo(exist);
    }
  }, [id, petsInfo]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <Petdetilscard
          key={selectedPetInfo._id}
          selectedPetInfo={selectedPetInfo}
        ></Petdetilscard>
      </div>
    </div>
  );
};

export default Petdetails;
