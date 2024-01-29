import React from "react";
import { UilMultiply } from "@iconscout/react-unicons";

const Dropdown = ({ togleHandle }) => {
  return (
    <div className="bg-BGblue fixed z-50 top-0 w-full h-screen py-2 px-8  text-white font-poppins  tracking-widest">
      <div className="flex justify-end mt-2" onClick={togleHandle}>
        <UilMultiply className="text-2xl w-10 h-10" />
      </div>
      <div className=" text-4xl text-center mt-10 justify-center space-y-5">
        <p className="py-3 hover:cursor-pointer" onClick={togleHandle}>
          Find jobs
        </p>
        <hr />
        <p className="py-3 hover:cursor-pointer" onClick={togleHandle}>
          Find Talent
        </p>
        <hr />
        <p className="py-3 hover:cursor-pointer" onClick={togleHandle}>
          Upload Job
        </p>
        <hr />
        <p className="py-3 hover:cursor-pointer" onClick={togleHandle}>
          About us
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
