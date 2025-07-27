import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.jpg";
import leetcode from "../assets/leetcode.png";

const Contact = () => {
  const socialLinks = [
    { img: github, links: "https://github.com/amankumarGH" },
    { img: linkedin, links: "https://leetcode.com/u/amankumar7/" },
    { img: leetcode, links: "https://www.linkedin.com/in/aman-kumar300/" },
  ];

  return (
    <div
      className=" flex flex-col items-center mt-24 gap-5 justify-center scroll-mt-24"
      id="contact"
    >
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
            {socialLinks.map((item, idx) => {
              return (
                <a href={item.links} target="_blank" key={idx}>
                  <img
                    src={item.img}
                    alt=""
                    className="w-14 h-14 object-cover border-2 border-pink-700 rounded-md hover:scale-110 transition-all duration-500"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* right flex */}

        <div className="w-[45%] flex flex-col gap-4">
          <div className="flex flex-col gap-2 text-gray-300">
            <label htmlFor="">Your Name</label>
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
            <a href="/">Submit Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
