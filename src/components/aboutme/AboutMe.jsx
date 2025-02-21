import React from "react";
import AboutmeText from "./AboutmeText";
import AboutmeImg from "./AboutmeImg";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-evenly items-center"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewpor={{ once: false, amount: 1 }}
      >
        <AboutmeText></AboutmeText>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewpor={{ once: false, amount: 1 }}
      >
        <AboutmeImg></AboutmeImg>
      </motion.div>
    </div>
  );
};

export default AboutMe;
