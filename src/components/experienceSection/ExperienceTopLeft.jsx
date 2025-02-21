import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange-2 font-bold text-3xl font-special uppercase text-center">
        Si
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="23" text="Websites" />
      </div>
      <p className="text text-white text-center">
        With hands-on experience in webdevlopment buliding dynamic and
        user-friendly web application
      </p>
      <ExperienceInfo number="100k" text="max" />
    </div>
  );
};

export default ExperienceTopLeft;
