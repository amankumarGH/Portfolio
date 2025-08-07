import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About Me", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex items-center justify-between px-4 md:px-10 py-4 max-w-7xl mx-auto backdrop-blur-md">
        {/* Logo placeholder */}
        
        <div className="text-3xl font-bold sm:text-2xl">Aman Kumar</div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6 bg-black/20 text-[18px] rounded-lg px-4 py-2">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`p-2 px-4 rounded-md cursor-pointer transition-all duration-300 ${
                active === item.id ? "bg-white text-black shadow-md" : ""
              }`}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Connect Button (always visible) */}
        <div className="hidden lg:block py-2 px-5 rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] cursor-pointer transition-all duration-500 hover:scale-105 font-medium text-base">
          <a href="#contact">Connect With Me</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-14 h-14 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-black/80 backdrop-blur-md py-4">
          <ul className="flex flex-col items-center gap-4 text-white text-lg">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                  setIsOpen(false);
                }}
                className={`p-2 px-4 rounded-md cursor-pointer transition-all duration-300 ${
                  active === item.id ? "bg-white text-black shadow-md" : ""
                }`}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <div className="mt-4 py-2 px-5 rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] cursor-pointer transition-all duration-500 hover:scale-105 font-medium text-base">
              <a href="#contact">Connect With Me</a>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
