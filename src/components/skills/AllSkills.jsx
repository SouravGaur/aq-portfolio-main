import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import { GrReactjs } from "react-icons/gr";
import { TbBrandRedux } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import SingleSkills from "./SingleSkills";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";

const AllSkills = () => {
  const skills = [
    {
      skill: "HTML",
      icon: TiHtml5,
    },
    {
      skill: "CSS",
      icon: FaCss3Alt,
    },
    {
      skill: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      skill: "React js",
      icon: GrReactjs,
    },
    {
      skill: "Redux",
      icon: TbBrandRedux,
    },
    {
      skill: "Tailwind",
      icon: RiTailwindCssFill,
    },
    {
      skill: "Bootstrap",
      icon: FaBootstrap,
    },

    {
      skill: "Java",
      icon: FaJava,
    },
  ];
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
      {skills.map((item, index) => {
        return (
          <motion.div
            key={index}
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewpor={{ once: false, amount: 0.2 }}
          >
            <SingleSkills
              key={index}
              text={item.skill}
              imgSvg={<item.icon />}
            ></SingleSkills>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkills;
