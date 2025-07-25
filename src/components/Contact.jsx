import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div className=" flex flex-col items-center mt-24 gap-5 justify-center">
      <h1 className="text-[60px] font-bold">Get in touch</h1>

      <div className="flex justify-center gap-12 mt-12">
        {/* left flex */}
        <div className="w-[35%] flex flex-col gap-6">
          <h1 className="text-[60px] font-bold bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] bg-clip-text text-gradient">
            Let's talk
          </h1>

          <p className="text-base text-gray-300">
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>

          <div className="flex gap-3 items-center">
            <MdMarkEmailUnread className="text-3xl text-gray-300" />
            <p className="text-xl text-gray-300">amankumaredi@gmail.com</p>
          </div>

          <div className="flex gap-3 items-center">
            <IoCall className="text-3xl text-gray-300" />
            <p className="text-xl text-gray-300">+91 5964821545</p>
          </div>
        </div>

        {/* right flex */}

        <div className="w-[50%] flex flex-col gap-4">
          <div className="flex flex-col gap-2 text-gray-300">
            <label htmlFor="" >Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-4 bg-gray-700 rounded-sm text-gray-400 text-xl"
            />
          </div>
          <div className="flex flex-col gap-2 text-gray-300">
            <label htmlFor="">Your Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="p-4 bg-gray-700 rounded-sm text-gray-400 text-xl"
            />
          </div>
          <div className="flex flex-col gap-2 text-gray-300">
            <label htmlFor="">Write your message here</label>
            <textarea
              name=""
              id=""
              rows={6}
              placeholder="Enter your message"
              className="p-4 bg-gray-700 rounded-sm text-gray-400 text-xl"
            ></textarea>
          </div>
          <div className="w-fit py-[16px] px-[50px] rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] cursor-pointer transition-all duration-500 border-2 border-transparent hover:border-white font-medium text-base">
            Submit Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
