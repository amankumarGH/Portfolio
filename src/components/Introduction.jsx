import React from "react";
import profile_img from "/public/assets/profile_img.jpeg";

const Introduction = () => {
  return (
    <div className="flex flex-col items-center gap-6 mt-36 px-4 sm:px-8">
      <img
        src={profile_img}
        alt="profile_pic"
        className="rounded-full h-40 w-40 sm:h-[180px] sm:w-[180px] md:h-[220px] md:w-[220px]"
      />

      <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-bold text-center w-full sm:w-[90%] md:w-[70%] lg:w-[50%] leading-tight">
        <span className="bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] bg-clip-text text-transparent">
          I'm Aman Kumar,
        </span>{" "}
        developer based in INDIA.
      </h1>

      <p className="text-center text-base sm:text-lg w-full sm:w-[90%] md:w-[70%] lg:w-[50%]">
        Turning ideas into fast, beautiful, and user-friendly web interfaces.
        Passionate about clean design, efficient code, and great digital
        experiences.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12 mt-4">
        <a
          href="#contact"
          className="py-3 px-6 sm:px-8 rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] cursor-pointer transition-all duration-500 border-2 border-transparent hover:border-white font-medium text-base"
        >
          Connect With Me
        </a>
        <a href="/public/resume.pdf" target="_blank" rel="noopener noreferrer">
          <div className="py-3 px-10 rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] cursor-pointer transition-all duration-500 border-2 border-transparent hover:border-white font-medium text-base">
            My Resume
          </div>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
