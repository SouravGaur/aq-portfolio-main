import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <div className="md:h-[425px] md:w-[320px] sm:h-auto sm:w-full border-5 border-orange-2 border-dashed rounded-2xl mt-12 p-4 hover:scale-[110%] transition-all duration-500">
      <p className="font-bold text-cyan text-2xl">{experience.Role}</p>
      <p className="text-orange-2 text-xl">{experience.company}</p>
      <p className="text-lightGrey text-xl">{experience.date}</p>
      <ul className="list-disc mt-4 pt-4 text-white px-2 text-xl">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </div>
  );
};

export default SingleExperience;
