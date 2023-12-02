import { useEffect, useState } from "react";
import Petinfocard from "../Components/Petlisting/Petinfocard";

const Petlisting = () => {
  const [petsInfo, setPetsInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pets")
      .then((res) => res.json())
      .then((data) => setPetsInfo(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 my-6">
        {petsInfo.map((petInfo) => (
          <Petinfocard key={petInfo._id} petInfo={petInfo}></Petinfocard>
        ))}
      </div>
    </div>
  );
};

export default Petlisting;
