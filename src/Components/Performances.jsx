import React, { useState } from "react";
import { Data } from "./DataAPI";
export const Performances = () => {
  const [Higher, setHigher] = useState(false);
  const [Lower, setLower] = useState(false);

  const topInternHandler = () => {
    setHigher((prev) => !prev);
    setLower(false)
  };
  const lowInternHandler = () => {
    setLower((prev) => !prev);
    setHigher(false)
  };
  return (
    <div>
      <h1 className="lg:mt-48 mt-40 flex justify-center font-bold lg:text-lg text-sm  text text-black/80">
        Toggle Buttons to see Interns Information{" "}
      </h1>
      <div className="flex gap-5 justify-between mt-20 mx-5 lg:mx-20">
        <button
          onClick={topInternHandler}
          className="bg-orange-500 px-5 py-2 rounded-xl shadow shadow-black/50 font-bold text-white text text-[13px]"
        >
          {Higher ? "Exit" : "Top Interns"}
        </button>
        <button
          onClick={lowInternHandler}
          className="bg-orange-500 px-5 py-2 rounded-xl shadow shadow-black/50 font-bold text-white text text-[13px]"
        >
          {Lower ? "Exit" : "Low Interns"}
        </button>
      </div>
      {Higher && (
        <div>
          <h1 className=" flex justify-center font-bold text-lg text text-black/80 mt-10 lg:mt-auto">
            Highest Scoring Interns
          </h1>

          <div className="mt-10 flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-20 gap-x-20 gap-y-20">
              {Data.filter((item) => item.scores > 70).map((item) => (
                <div key={item.id}>
                  <div className="w-1/4 h-1/4">
                    <figure className="w-[200px] h-[200px]">
                      <img
                        src={item.profile}
                        className="w-full h-full rounded-full"
                      />
                      <figcaption className="flex justify-center mt-5 text-center">
                        <div className="flex flex-col">
                          <p className="font-bold text text-[13px] text-black/80">
                            {item.InternName}
                          </p>
                          <p className="font-bold text text-[13px] text-black/80">
                            Score: {item.scores}
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {Lower && (
        <div>
          <h1 className="mt-10 flex justify-center font-bold text-lg text text-black/80">
            Lowest Scoring Interns
          </h1>

          <div className=" flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-20 gap-x-20 gap-y-20">
              {Data.filter((item) => item.scores < 70).map((item) => (
                <div key={item.id}>
                  <div className="w-1/4 h-1/4">
                    <figure className="w-[200px] h-[200px]">
                      <img
                        src={item.profile}
                        className="w-full h-full rounded-full"
                      />
                      <figcaption className="flex justify-center mt-5 text-center">
                        <div className="flex flex-col">
                          <p className="font-bold text text-[13px] text-black/80">
                            {item.InternName}
                          </p>
                          <p className="font-bold text text-[13px] text-black/80">
                            Score: {item.scores}
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
