import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProjects from "./SingleProjects";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectsMain = () => {
  const projects = [
    {
      name: "Virtual AI",
      year: "October 2024",
      align: "right",
      image: "/images/s.jpg",
      link: "https://virtual-ai-woad.vercel.app",
    },
    {
      name: "Secure Password Genrator",
      year: "August 2024",
      align: "left",
      image: "/images/ss.png",
      link: "https://virtual-ai-woad.vercel.app",
    },
    {
      name: "Pika run Game",
      year: "July 2024",
      align: "right",
      image: "/images/pica.png",
      link: "https://pica-run-game.vercel.app",
    },
  ];
  return (
    <div id="projects" className="max-w-[1300px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewpor={{ once: false, amount: 0 }}
      >
        {" "}
        <ProjectsText></ProjectsText>
      </motion.div>

      <div className="mt-12 flex-col gap-20 max-w[1200px] mx-auto ">
        {projects.map((prj, index) => {
          return (
            <SingleProjects
              key={index}
              name={prj.name}
              year={prj.year}
              align={prj.align}
              image={prj.image}
              link={prj.link}
            ></SingleProjects>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
