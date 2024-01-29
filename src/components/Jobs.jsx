import React from "react";
import { UilHeart, UilClockThree } from "@iconscout/react-unicons";
import { JobsData } from "./JobsData";

const Jobs = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 items-start">
        {/* job detail card */}
        {JobsData.map((job) => (
          <div className="bg-white rounded-xl p-8 max-w-[320px] font-poppins">
            <div>
              <div className="flex justify-between">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-9 h-9 object-cover"
                    src={job.imageUrl}
                    alt="logo"
                  />
                  <div>
                    <h1 className="font-semibold">{job.title}</h1>
                    <div className="flex text-xs font-semibold text-gray-500 space-x-1">
                      <p>{job.company}</p>
                      <p>•</p>
                      <p>{job.applicants} Applicants</p>
                    </div>
                  </div>
                </div>
                <UilHeart className="text-gray-500" />
              </div>
              <div className="flex text-xs font-semibold mt-3 space-x-2">
                {job.tags.experience && (
                  <p className="text-[#521191] bg-[#f1e3ff] rounded-md px-2 py-1">
                    {job.tags.experience}
                  </p>
                )}
                {job.tags.time && (
                  <p className="text-[#109134] bg-[#e3fff0] rounded-md px-2 py-1">
                    {job.tags.time}
                  </p>
                )}
                {job.tags.type && (
                  <p className="text-[#96561b] bg-[#ffefe5] rounded-md px-2 py-1">
                    {job.tags.type}
                  </p>
                )}
              </div>
              <div className="mt-5">
                <p className="text-xs text-gray-500 font-semibold">
                  {job.description}
                </p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <h1 className="text-gray-500 font-semibold">
                  <span className=" text-black">${job.cost}</span>/hr
                </h1>
                <div className="flex text-gray-500 items-center space-x-1">
                  <UilClockThree className=" w-5" />
                  <p className="text-xs font-semibold ">
                    Posted {job.days} days ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
