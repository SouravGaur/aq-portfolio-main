import React from "react";

const AboutmeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-15 ">About Me</h2>
      <p className="text-white hover:scale-[110%] text-xl">
        Hi! I’m Sourav Gaur, a final-year Computer Science Engineering student
        at UIET, Kurukshetra,<br></br> passionate about web development and DSA
        in C++. <br></br>I specialize in HTML, CSS, JavaScript, Bootstrap,
        Tailwind, and React, with hands-on experience in <br></br>building
        interactive and responsive web applications. Previously, I interned at
        Internshala, refining my <br></br>technical and problem-solving skills.
      </p>
      <button className="border border-orange-2 rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange-2 transition-all hover:scale-[120%] duration-100 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        My Projects
      </button>
    </div>
  );
};

export default AboutmeText;
