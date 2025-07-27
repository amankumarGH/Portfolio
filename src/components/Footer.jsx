import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2 w-[80%] mx-auto mt-24 flex justify-between py-7">
      <p>© 2025 Aman Kumar. All rights reserved.</p>
      <div className="flex gap-6">
        <div>Term of Services</div>
        <div>Privacy Policy</div>
        <a href="#contact">Connect with me</a>
      </div>
    </div>
  );
};

export default Footer;
