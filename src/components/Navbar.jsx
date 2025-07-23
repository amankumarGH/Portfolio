import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-5 mx-[170px]">
      <img src={logo} alt="logo" />
      <ul className="flex items-center list-none gap-[40px] text-[18px]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Portfolio</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
      <div className="py-[10px] px-[20px] rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] text-[15px] cursor-pointer transition-all duration-500 hover:scale-105 font-medium">
        Connect With Me
      </div>
    </div>
  );
};

export default Navbar;
