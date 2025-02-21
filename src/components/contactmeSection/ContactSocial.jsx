import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://github.com/SouravGaur"
        Icon={IoLogoGithub}
      />
      <SingleContactSocial
        link="https://www.linkedin.com/in/sourav-gaur-274660283/"
        target="_blank"
        Icon={FaLinkedin}
      />
      <SingleContactSocial
        link="https://www.instagram.com/sourav__gaur/"
        target="_blank"
        Icon={FaInstagram}
      />
      <SingleContactSocial
        link="mailto:souravgaur512@gmail.com"
        target="_blank"
        Icon={HiOutlineMail}
      />
    </div>
  );
};

export default ContactSocial;
