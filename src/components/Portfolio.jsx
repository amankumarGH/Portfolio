import React from "react";
import PortfolioCards from "./PortfolioCards";

const Portfolio = () => {
  return (
    <div
      className="flex flex-col items-center gap-8 mt-16 px-4 sm:px-6 scroll-mt-24"
      id="portfolio"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-center">
        My latest work
      </h1>

      <PortfolioCards />

      <div className="bg-white text-black rounded-full hover:bg-pink-600 hover:text-white transition duration-500">
        <a
          href="https://github.com/amankumarGH"
          className="inline-block py-3 px-8 font-bold text-lg sm:text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show more
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
