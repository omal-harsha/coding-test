import React from "react";
import { UilSearch, UilMap } from "@iconscout/react-unicons";

const Hero = () => {
  return (
    <div className="relative px-10 bg-BGdark py-6 ">
      <div>
        <h1 className="font-poppins text-3xl text-white">
          Find Your Dream Job Here ✧
        </h1>
        <div className="relative bg-white w-full h-16 items-center flex pl-6 rounded-full z-10 my-5">
          <div className="text-gray-400 mr-1">
            <UilSearch className="w-5" />
          </div>
          <input
            type="text"
            className="w-full h-12 focus:outline-none pr-3"
            placeholder="Job title or keyword?"
          />
          <h1 className="text-gray-300 text-3xl font-thin mr-3">|</h1>

          <div className="text-gray-400 mr-1">
            <UilMap className="w-5" />
          </div>
          <input
            type="text"
            className="w-full h-12 focus:outline-none pr-3"
            placeholder="Add country or city"
          />
          <button className="bg-BGblue hover:bg-blue-600 px-8 py-2 rounded-full h-12 mr-2 text-white hover:shadow-lg  font-poppins text-sm">
            Search
          </button>
        </div>
        {/* Move the image div here with a lower z-index */}
        <div className="absolute z-0">
          <img
            className="w-[320px] ml-[700px] -mt-44"
            src="https://firebasestorage.googleapis.com/v0/b/blogsite-33dcd.appspot.com/o/codetest%2FHeroImage.png?alt=media&token=727aa863-d312-4a5f-ac13-bc6564cb151b"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
