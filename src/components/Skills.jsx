import React from "react";
import javascript from "/public/assets/javascript.png";
import cpp from "/public/assets/cpp.png";
import react from "/public/assets/react.webp";
import tailwind from "/public/assets/tailwind.png";
import html from "/public/assets/html.png";
import nodejs from "/public/assets/nodejs.png";
import express from "/public/assets/express.png";
import mongodb from "/public/assets/mongodb.svg";
import css from "/public/assets/css.svg";

const Skills = () => {
  const skills = [
    { name: "C++", imgs: cpp },
    { name: "React", imgs: react },
    { name: "TailwindCSS", imgs: tailwind },
    { name: "HTML", imgs: html },
    { name: "Node.js", imgs: nodejs },
    { name: "Express.js", imgs: express },
    { name: "MongoDB", imgs: mongodb },
    { name: "JavaScript", imgs: javascript },
    { name: "CSS", imgs: css },
  ];

  return (
    <div
      className="p-6 sm:p-10 md:p-12 flex flex-col gap-10 mt-16 items-center scroll-mt-24 max-w-7xl mx-auto"
      id="skills"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center">
        Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-3 border-2 rounded-lg hover:shadow-md hover:shadow-gray-500 transition-shadow duration-300 bg-white/10 w-full max-w-[220px]"
          >
            <img
              src={skill.imgs}
              alt={skill.name}
              className="w-16 h-16 sm:w-16 sm:h-16 object-contain"
            />
            <h2 className="text-base sm:text-lg font-semibold">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
