import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import { GrReactjs } from "react-icons/gr";
import { TbBrandRedux } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import SingleSkills from "./SingleSkills";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AllSkillsSm = () => {
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
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewpor={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange-2"></item.icon>
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSm;
