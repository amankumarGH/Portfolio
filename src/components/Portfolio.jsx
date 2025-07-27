import React from "react";
import project_1 from "../assets/project_1.png";
import { Link } from "react-router-dom";

const imgs = [
  {
    address: "https://studygear.netlify.app/",
    img: project_1,
  },
  {
    address: "/comingsoon",
    img: project_1,
  },
  {
    address: "/comingsoon",
    img: project_1,
  },
  {
    address: "/comingsoon",
    img: project_1,
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center gap-8 mt-16 scroll-mt-24" id="portfolio">
      <h1 className="text-[60px] font-bold">My latest work</h1>

      <div className="grid grid-cols-3 gap-6">
        {imgs.map((item, index) => (
          <a
            key={index}
            href={item.address}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[380px] h-[250px] overflow-hidden rounded-lg border-4 border-transparent hover:border-pink-500 hover:scale-110 transform cursor-pointer transition-all duration-500"
          >
            <img
              src={item.img}
              alt={`project-${index}`}
              className="w-full h-full object-fill "
            />
          </a>
        ))}
      </div>

      <div className="bg-white text-black rounded-full hover:bg-pink-600 hover:text-white transition duration-500">
        <a
          href="https://github.com/amankumarGH"
          className="inline-block py-3 px-8 font-bold text-[1.25rem] "
          target="_blank"
        >
          Show more
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
