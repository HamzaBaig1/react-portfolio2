import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const service_id = import.meta.env.VITE_SERVICE_ID;
const template_id = import.meta.env.VITE_TEMPLATE_ID;
const public_key = import.meta.env.VITE_PUBLIC_KEY;
function Contact({ theme }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const disable = email.length === 0 || name.length === 0 ? true : false;
  const buttonStyle = disable
    ? "bg-gray-800"
    : "bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110";

  function nameChangeHandler(e) {
    setName(e.target.value);
  }
  function emailChangeHandler(e) {
    setEmail(e.target.value);
  }
  function msgChangeHandler(e) {
    setMsg(e.target.value);
  }
  const bgColor =
    theme === "dark" ? "bg-gradient-to-b from-black to-gray-800" : "bg-white";
  const fontColor = theme === "dark" ? "text-white" : "text-black";
  const borderColor = theme === "dark" ? "border-white" : "border-black";

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          toast.success("Email sent successfully !");
          setName("");
          setEmail("");
          setMsg("");
        },
        (error) => {
          toast.error("Oops... Email not sent!");
        }
      );
  };
  return (
    <div
      name="contact"
      className={`lg:pt-24 w-full h-full pt-20 p-4 ${fontColor} ${bgColor}`}
    >
      <div className="flex flex-col p-4 max-w-screen-lg 2xl:max-w-screen-2xl justify-center mx-auto h-full lg:h-screen">
        <div className="pb-8">
          <p className="text-4xl 2xl:text-7xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 2xl:text-xl font-semibold">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={name}
              onChange={nameChangeHandler}
              placeholder="Enter your name"
              className={`p-2 2xl:p-5 2xl:text-xl bg-transparent border-2 rounded-md ${fontColor} ${borderColor}  focus:outline-none`}
            />
            <input
              type="text"
              name="email"
              value={email}
              onChange={emailChangeHandler}
              placeholder="Enter your email"
              className={`my-4 p-2 2xl:p-5 2xl:text-xl bg-transparent border-2 rounded-md ${fontColor} ${borderColor} focus:outline-none`}
            />
            <textarea
              name="message"
              rows="10"
              value={msg}
              onChange={msgChangeHandler}
              placeholder="Enter your message"
              className={` ${fontColor} ${borderColor} p-2 2xl:p-5 2xl:text-xl bg-transparent border-2 rounded-md  focus:outline-none`}
            ></textarea>
            {
              <button
                disabled={disable}
                className={`text-white ${buttonStyle} px-6 py-3 2xl:px-8 2xl:py-5 2xl:text-xl my-8 mx-auto flex items-center rounded-md duration-300`}
              >
                Let's Talk
              </button>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
