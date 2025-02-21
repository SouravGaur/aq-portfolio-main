import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AllExperience = () => {
  const experiences = [
    {
      Role: "Web Devloper Intern",
      company: "Unified Mentor ,Gurugram",
      date: "Jan 2025-Feb 2025",
      responsibilities: [
        "Work on real life projects",
        "Work on projects like E-Bus Management System",
        "Creating my own Portfolio using moder web Technologies",
        "Genrating new ideas for better user experience",
      ],
    },
    {
      Role: "Web Devloper Intern",
      company: "Internshala ,Gurugram",
      date: "July 2022 – Sep 2022",
      responsibilities: [
        "Completed 8-week training in HTML, CSS, Bootstrap, JavaScript, and React.",
        "Gained practical experience in building responsive and dynamic web applications.",
        "innovating new concepts to enhance user experience.",
      ],
    },
  ];
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-evenly">
      {experiences.map((experience, index) => {
        return (
          <motion.div
            key={index}
            variants={fadeIn("right", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewpor={{ once: false, amount: 0.7 }}
            className="flex md:flex-row sm:flex-col gap-28  items-center justify-evenly"
          >
            <SingleExperience
              key={index}
              experience={experience}
            ></SingleExperience>
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewpor={{ once: false, amount: 0.7 }}
              >
                <FaArrowRight className="text-6xl text-orange-2 lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllExperience;
