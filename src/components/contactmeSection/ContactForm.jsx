import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nuc9ice", "template_5huzzul", form.current, {
        publicKey: "wo_O2tww5D6Kk4dZC",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent!");

          setTimeout(() => {
            setSuccess("");
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form
        action=""
        className="flex flex-col gap-4"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2  text-white"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 text-white"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          id=""
          placeholder="Message"
          rows="9"
          cols="50"
          className="rounded-lg bg-lightBrown p-2  text-white"
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan bg-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
