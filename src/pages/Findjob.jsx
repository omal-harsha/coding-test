import React from "react";
import Filter from "../components/Filter";
import Jobs from "../components/Jobs";

const Findjob = () => {
  return (
    <div className="bg-BGgray py-5 px-6 md:px-10">
      <div className="text-2xl font-poppins text-gray-800 font-semibold">
        Recommended jobs
      </div>
      <div className="flex">
        <div className="mr-8 hidden md:flex">
          <Filter />
        </div>
        <div className="mt-7">
          <Jobs />
        </div>
      </div>
    </div>
  );
};

export default Findjob;
