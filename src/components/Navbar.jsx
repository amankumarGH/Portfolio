import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About Me", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex items-center justify-between my-5 mx-[170px]  fixed top-0 left-0 right-0 z-50 ">
      {/* <img src={logo} alt="logo" /> */}

      <ul className="flex gap-6 bg-black/20 text-[18px] rounded-lg backdrop-blur-lg">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`p-3 rounded-md cursor-pointer transition-all duration-600 ${
              active === item.id ? "bg-white text-black shadow-md" : ""
            }`}
          >
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className="py-[15px] px-[20px] rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] cursor-pointer transition-all duration-500 hover:scale-105 font-medium text-base">
        <a href="#contact">Connect With Me</a>
      </div>
    </div>
  );
};

export default Navbar;
