import React, { useState } from "react";
import Slider from "react-slider";
import "../App.css";
import { UilTimesSquare } from "@iconscout/react-unicons";

const MIN = 50;
const MAX = 180;

const Filter = ({ click, handle }) => {
  const [values, setValues] = useState([MIN, MAX]);
  const [filter, setFilter] = useState(false);

  console.log("values: ", handle);

  return (
    <div className="font-poppins text-sm">
      <div
        className={`space-y-5  bg-BGgray py-8  w-full max-w-[230px] hidden md:flex flex-col mr-7`}
      >
        <div className=" ">
          <div className="flex justify-between">
            <h1 className=" font-semibold mb-4 ">Job Type</h1>
            <h1 className="text-red-600 font-semibold">Clear all</h1>
          </div>
          <div className="space-y-2 text-xs font-semibold text-gray-700">
            <div className="items-center flex">
              <input type="checkbox" />
              <span className="ml-2">Full time</span>
            </div>
            <div className="items-center flex">
              <input type="checkbox" /> <span className="ml-2">Part time</span>
            </div>
            <div className="items-center flex">
              <input type="checkbox" /> <span className="ml-2">Internship</span>
            </div>
            <div className="items-center flex">
              <input type="checkbox" />{" "}
              <span className="ml-2">Project work</span>
            </div>
            <div className="items-center flex">
              <input type="checkbox" />{" "}
              <span className="ml-2">Volunteering</span>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        {/* Salary date range select */}
        <div className="w-56 h-10 ">
          <h1 className=" font-semibold mb-3 ">Salary Range</h1>
          <div className="flex justify-between -mb-3">
            <h1>$ {values[0]}</h1>
            <h1>$ {values[1]}K</h1>
          </div>

          <Slider
            className="horizontal-slider"
            trackClassName="example-track"
            thumbClassName="example-thumb"
            onChange={setValues}
            value={values}
            min={MIN}
            max={MAX}
          />
        </div>
        {/* ------------------------------------------------------------ */}
        <p className=""> .</p>
        <div className="  ">
          <h1 className=" font-semibold mb-3 ">Experience Level</h1>
          <div className="space-y-2 text-xs font-semibold text-gray-700">
            <div className="items-center flex">
              <input type="checkbox" />
              <span className="ml-2">Entry level</span>
            </div>
            <div className="items-center flex">
              <input type="checkbox" />{" "}
              <span className="ml-2">Intermediate</span>
            </div>
            <div className="items-center flex">
              <input type="checkbox" /> <span className="ml-2">Expert</span>
            </div>
          </div>
        </div>

        <div className=" ">
          <h1 className=" font-semibold mb-3 ">Job categories</h1>
        </div>
      </div>

      {/* mobile screen */}

      <div
        className={`space-y-5  bg-gray-200 py-8 mt-[320px] px-5 w-full max-w-[270px] allfilter z-50 ${
          handle ? "panel-closed " : " panel-open"
        } md:hidden`}
      >
        <div className=" ">
          <div
            className="flex float-end -mt-6 -mr-3 text-gray-500"
            onClick={click}
          >
            <UilTimesSquare />
          </div>
          <div className="flex justify-between">
            <h1 className=" font-semibold mb-4 ">Job Type</h1>
            <h1 className="text-red-600 font-semibold">Clear all</h1>
          </div>
          <div className="space-y-2 text-xs font-semibold text-gray-700">
            <div className="items-center flex">
              <input type="checkbox" />
              <span className="ml-2">Full time</span>
            </div>
            <div className="items-center flex">
              <input type="checkbox" /> <span className="ml-2">Part time</span>
            </div>
            <div className="items-center flex">
              <input type="checkbox" /> <span className="ml-2">Internship</span>
            </div>
            <div className="items-center flex">
              <input type="checkbox" />{" "}
              <span className="ml-2">Project work</span>
            </div>
            <div className="items-center flex">
              <input type="checkbox" />{" "}
              <span className="ml-2">Volunteering</span>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        {/* Salary date range select */}
        <div className="w-56 h-10 ">
          <h1 className=" font-semibold mb-3 ">Salary Range</h1>
          <div className="flex justify-between -mb-3">
            <h1>$ {values[0]}</h1>
            <h1>$ {values[1]}K</h1>
          </div>

          <Slider
            className="horizontal-slider"
            trackClassName="example-track"
            thumbClassName="example-thumb"
            onChange={setValues}
            value={values}
            min={MIN}
            max={MAX}
          />
        </div>
        {/* ------------------------------------------------------------ */}
        <p className=""> .</p>
        <div className="  ">
          <h1 className=" font-semibold mb-3 ">Experience Level</h1>
          <div className="space-y-2 text-xs font-semibold text-gray-700">
            <div className="items-center flex">
              <input type="checkbox" />
              <span className="ml-2">Entry level</span>
            </div>
            <div className="items-center flex">
              <input type="checkbox" />{" "}
              <span className="ml-2">Intermediate</span>
            </div>
            <div className="items-center flex">
              <input type="checkbox" /> <span className="ml-2">Expert</span>
            </div>
          </div>
        </div>

        <div className=" ">
          <h1 className=" font-semibold mb-3 ">Job categories</h1>
        </div>
      </div>
    </div>
  );
};

export default Filter;
