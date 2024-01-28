import React from "react";
import Filter from "../components/Filter";

const Findjob = () => {
  return (
    <div className="bg-BGgray py-5 px-10">
      <div className="text-2xl font-poppins text-gray-800 font-semibold">
        Recommended jobs
      </div>
      <div>
        <div>
          <Filter />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Findjob;
