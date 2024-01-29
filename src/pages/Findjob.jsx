import React, { useState } from "react";
import Filter from "../components/Filter";
import Jobs from "../components/Jobs";
import { UilFilter } from "@iconscout/react-unicons";

const Findjob = () => {
  const [handle, setHandle] = useState(false);

  const hadleClick = () => {
    console.log("test");
    setHandle(!handle);
    console.log(handle);
  };

  return (
    <div className="bg-BGgray py-5 px-6 md:px-10">
      <div className="text-2xl font-poppins text-gray-800 font-semibold flex justify-between items-center">
        <h1 onClick={hadleClick}>Recommended jobs</h1>
        <UilFilter className="text-gray-500 md:hidden" onClick={hadleClick} />
      </div>
      <div className="flex">
        <div className="">
          <Filter handle={handle} />
        </div>
        <div className="mt-7">
          <Jobs />
        </div>
      </div>
    </div>
  );
};

export default Findjob;
