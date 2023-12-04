import Donationscard from "../Components/Donations/Donationscard";
import { useLoaderData } from "react-router-dom";

const Donations = () => {
  const petsInfo = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 my-6">
        {petsInfo.map((petInfo) => (
          <Donationscard key={petInfo._id} petInfo={petInfo}></Donationscard>
        ))}
      </div>
    </div>
  );
};

export default Donations;
