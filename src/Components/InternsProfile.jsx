import React from "react";
import { Data } from "./DataAPI";

export const InternsProfile = () => {
  return (
    <div>
      <h1 className=" mt-[200px] lg:mt-[150px] mb-10 font-bold text-xl text-black/80 flex text justify-center">
        Intern-Gee Participants
      </h1>
      <div className="flex justify-center w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20  ">
          {Data.map((intern) => (
            <div key={intern.id} className="w-1/4 h-1/4 ">
              <figure className="w-[300px] h-[200px]">
                <img
                  src={intern.profile}
                  alt="Profile"
                  className="w-full h-full"
                />
                <figcaption className="flex justify-center gap-10 mt-3">
                  <p className="font-bold  text-black/80">{intern.id}</p>
                  <p className="font-bold text-black/80">
                    {" "}
                    {intern.InternName}
                  </p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
