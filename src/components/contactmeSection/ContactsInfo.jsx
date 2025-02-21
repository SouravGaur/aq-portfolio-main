import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import SingleInfo from "./SingleInfo";
const ContactsInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo
        text="Souravgaur512@gmail.com"
        Image={HiOutlineMail}
      ></SingleInfo>
      <SingleInfo text="8882876943" Image={FiPhone}></SingleInfo>
      <SingleInfo text="Sourav Gaur" Image={FaLinkedin}></SingleInfo>
      <SingleInfo text="Faridabad, Haryana" Image={SlLocationPin} />
    </div>
  );
};

export default ContactsInfo;
