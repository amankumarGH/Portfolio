import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import github from "/public/assets/github.png";
import linkedin from "/public/assets/linkedin.jpg";
import leetcode from "/public/assets/leetcode.png";

const Contact = () => {
  const socialLinks = [
    { img: github, links: "https://github.com/amankumarGH" },
    { img: linkedin, links: "https://leetcode.com/u/amankumar7/" },
    { img: leetcode, links: "https://www.linkedin.com/in/aman-kumar300/" },
  ];

  return (
    <div
      className="flex flex-col items-center mt-24 gap-10 justify-center scroll-mt-24 px-4 sm:px-8"
      id="contact"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-center">
        Get in touch
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-12 w-full max-w-7xl">
        {/* Left Section */}
        <div className="w-full md:w-[45%] flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] bg-clip-text text-transparent">
            Let's talk
          </h1>

          <p className="text-base text-gray-300">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>

          <div className="flex gap-3 items-center">
            <MdMarkEmailUnread className="text-3xl text-gray-300" />
            <p className="text-lg sm:text-xl text-gray-300">
              amankumaredi@gmail.com
            </p>
          </div>

          <div className="flex gap-4 items-center">
            {socialLinks.map((item, idx) => (
              <a href={item.links} target="_blank" rel="noreferrer" key={idx}>
                <img
                  src={item.img}
                  alt={`social-${idx}`}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-cover border-2 border-pink-700 rounded-md hover:scale-110 transition-all duration-500"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[50%] flex flex-col gap-4">
          <div className="flex flex-col gap-2 text-gray-300">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="p-4 bg-gray-700 rounded-sm text-gray-400 text-base sm:text-xl"
            />
          </div>

          <div className="flex flex-col gap-2 text-gray-300">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="p-4 bg-gray-700 rounded-sm text-gray-400 text-base sm:text-xl"
            />
          </div>

          <div className="flex flex-col gap-2 text-gray-300">
            <label htmlFor="message">Write your message here</label>
            <textarea
              id="message"
              rows={6}
              placeholder="Enter your message"
              className="p-4 bg-gray-700 rounded-sm text-gray-400 text-base sm:text-xl"
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
