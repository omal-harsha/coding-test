import React, { useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
import Dropdown from "./Dropdown";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // on off mobile nav bar
  const togleHandle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      <div className=" justify-between flex bg-BGdark  h-16 items-center px-10">
        <div>
          <img
            className="w-16"
            src="https://firebasestorage.googleapis.com/v0/b/blogsite-33dcd.appspot.com/o/codetest%2FCompanyLogo.png?alt=media&token=a10c5382-fa45-407f-8c0b-e8f03a43c186"
            alt="companyLogo"
          />
        </div>
        <div className=" text-[#aeaeae] space-x-8 font-poppins hidden md:flex">
          <h1 className="hover:text-BGblue cursor-pointer border-t-2 py-[19px] border-BGdark hover:border-BGblue">
            Find Jobs
          </h1>
          <h1 className="hover:text-BGblue cursor-pointer border-t-2 py-[19px] border-BGdark hover:border-BGblue">
            Find Talent
          </h1>
          <h1 className="hover:text-BGblue cursor-pointer border-t-2 py-[19px] border-BGdark hover:border-BGblue">
            Upload Job
          </h1>
          <h1 className="hover:text-BGblue cursor-pointer border-t-2 py-[19px] border-BGdark hover:border-BGblue">
            About us
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <h1 className="text-gray-200 font-poppins text-sm hidden md:flex">
            Fintan Cabrera
          </h1>
          <img
            className="w-8 h-8 object-cover rounded-full"
            src="https://firebasestorage.googleapis.com/v0/b/blogsite-33dcd.appspot.com/o/codetest%2FprofilePic.jpg?alt=media&token=91b87502-98f1-4ecf-a27d-cdb4376c1ca5"
            alt="Profile"
          />
          <div className="md:hidden text-white pl-3" onClick={togleHandle}>
            <UilBars />
          </div>
        </div>
      </div>
      {toggleMenu && <Dropdown togleHandle={togleHandle} />}
    </div>
  );
};

export default Header;
