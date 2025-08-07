import React from "react";
import project_1 from "/public/assets/project_1.png";
import project_2 from "/public/assets/chatApp.png";
import project_3 from "/public/assets/note-app.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const PortfolioCards = () => {
  const imgs = [
    {
      address: "https://github.com/amankumarGH/Real-Time-Chat-App",
      name: "Real Time Talk",
      img: project_2,
    },
    {
      address: "https://github.com/amankumarGH/Note-taking-app",
      name: "Note Taking App",
      img: project_3,
    },
    {
      address: "https://studygear.netlify.app/",
      name: "StudySync",
      img: project_1,
    },
    // {
    //   address: "/comingsoon",
    //   name: "Coming Soon",
    //   img: project_1,
    // },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-4">
      {imgs.map((item, index) => (
        <div
          className="bg-white/10 px-5 py-6 rounded-md flex flex-col gap-4 items-center shadow-sm hover:shadow-md transition-shadow duration-300"
          key={index}
        >
          <a
            href={item.address}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <img
              src={item.img}
              alt={`project-${index}`}
              className="w-full aspect-[3/2] object-fill rounded-lg border-2 border-transparent hover:border-pink-500 cursor-pointer transition-all duration-500"
            />
          </a>

          <h1 className="font-bold text-xl sm:text-2xl text-center text-gradient2">
            {item.name}
          </h1>

          <a
            href={item.address}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-[#bc20b1] transition-colors text-2xl"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCards;
