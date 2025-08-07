import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2 mt-24 w-full">
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center py-6 px-4 sm:px-8 gap-y-4">
        <p className="text-sm text-center sm:text-left">
          ©2025 Aman Kumar. All rights reserved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 text-sm text-center sm:text-right">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#contact" className="hover:underline">
            Connect with me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
