import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-orange-2 text-3xl mb-4">Get In Touch</h2>
        <p className="text-white text-xl align-left">
          Feel free to reach out to me for collaboration, opportunities, or any
          queries<br></br> you are just few clicks away!
        </p>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default ContactMeLeft;
