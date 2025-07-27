import React from "react";
import profile_img from "../assets/profile_img.jpeg";

const Introduction = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-[150px]">
      <img
        src={profile_img}
        alt="profile_pic"
        className="rounded-full h-[220px] w-[220px]"
      />
      <h1 className="text-[65px] font-bold text-center w-[50%] leading-none">
        <span className="bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] bg-clip-text text-gradient">
          I'm Aman Kumar,
        </span>{" "}
        developer based in INDIA.
      </h1>
      <p className="w-[50%] text-center text-[18px]">
        Turning ideas into fast, beautiful, and user-friendly web interfaces.
        Passionate about clean design, efficient code, and great digital
        experiences.
      </p>
      <div className="flex gap-12">
        <div className="py-[16px] px-[22px] rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] cursor-pointer transition-all duration-500 border-2 border-transparent hover:border-white font-medium text-base">
          Connect With Me
        </div>
        <div className="py-[16px] px-[45px] rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] cursor-pointer transition-all duration-500 border-2 border-transparent hover:border-white font-medium text-base">
          My resume
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Introduction;
