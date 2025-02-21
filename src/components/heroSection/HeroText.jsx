import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full md:text-left sm:text-center -z-20">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewpor={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text:xl uppercase text-cyan"
      >
        Web Devloper
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewpor={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange-2"
      >
        Sourav Gaur
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewpor={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        A passionate Web Devloper with hands-on <br></br>experience in
        full-stack web development
      </motion.p>
    </div>
  );
};

export default HeroText;
