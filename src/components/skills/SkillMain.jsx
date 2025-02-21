import React from "react";
import SkillText from "./SkillText";
import AllSkills from "./AllSkills";
import AllSkillsSm from "./AllSkillsSm";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillMain = () => {
  return (
    <div id="skills">
      <div className="max-w[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewpor={{ once: false, amount: 1 }}
        >
          <SkillText></SkillText>
        </motion.div>

        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block  md:hidden sm:hidden xs:hidden">
          <AllSkills></AllSkills>
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSm />
        </div>
      </div>
    </div>
  );
};

export default SkillMain;
