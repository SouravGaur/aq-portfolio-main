import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <Link to="contact" smooth={true} spy={true} duration={500} offset={-130}>
      <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan-400 border flex items-center gap-1 bg-gradient-to-r from-cyan-400 to-orange-400 hover:border-orange-400 hover:scale-110 hover:shadow-cyanShadow hover:cursor-pointer transition-all duration-500 ">
        Hire Me
        <div className="sm:hidden md:block">
          <FiArrowDownRight></FiArrowDownRight>
        </div>
      </button>
    </Link>
  );
};

export default NavbarBtn;
