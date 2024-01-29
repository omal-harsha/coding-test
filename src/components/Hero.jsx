import React from "react";
import { UilSearch, UilMap } from "@iconscout/react-unicons";

const Hero = () => {
  return (
    <div className="relative px-5 sm:px-10 bg-BGdark py-6 ">
      <div>
        <div className="flex">
          <h1 className="font-poppins text-3xl flex-1 text-white text-center sm:text-left">
            Find Your Dream Job Here ✧
          </h1>
          <div className="-mb-32 sm:flex-1">
            <img
              className="w-[320px] -mt-6 hidden sm:flex"
              src="https://firebasestorage.googleapis.com/v0/b/blogsite-33dcd.appspot.com/o/codetest%2FHeroImage.png?alt=media&token=727aa863-d312-4a5f-ac13-bc6564cb151b"
              alt="hero"
            />
          </div>
        </div>

        {/* laptop screen search bar */}
        <div className="relative bg-white w-full h-16 items-center hidden md:flex pl-6 rounded-full z-10 my-5">
          <div className="text-gray-400 mr-3">
            <UilSearch className="w-5" />
          </div>
          <input
            type="text"
            className="w-full h-12 focus:outline-none pr-3"
            placeholder="Job title or keyword?"
          />
          <h1 className="text-gray-300 text-3xl font-thin mr-5">|</h1>

          <div className="text-gray-400 mr-3">
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

        {/* mobile screen search bar */}
        <div className="relative bg-white w-full h-12 md:h-16 items-center flex pl-6 md:hidden rounded-full z-10 my-5 text-xs">
          <div className="text-gray-400 mr-3">
            <UilSearch className="w-5" />
          </div>
          <input
            type="text"
            className="w-full h-10 md:h-12 focus:outline-none md:pr-3"
            placeholder="Job title or keyword?"
          />
          <h1 className="text-gray-300 text-3xl font-thin mr-5">|</h1>

          <div className="text-gray-400 mr-3">
            <UilMap className="w-5" />
          </div>
          <input
            type="text"
            className="w-full h-10 md:h-12 focus:outline-none mr-3 md:pr-3"
            placeholder="Add country or city"
          />
        </div>
        <div className="md:hidden">
          <button className="bg-BGblue hover:bg-blue-600 w-full px-8 py-2 rounded-full h-12 mr-2 text-white hover:shadow-lg  font-poppins text-sm">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
