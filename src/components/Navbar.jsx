import React from "react";
// import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-5 mx-[170px]">
      {/* <img src={logo} alt="logo" /> */}
      <ul className="flex items-center list-none gap-[40px] text-[18px]">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="py-[15px] px-[20px] rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] cursor-pointer transition-all duration-500 hover:scale-105 font-medium text-base">
        Connect With Me
      </div>
    </div>
  );
};

export default Navbar;
