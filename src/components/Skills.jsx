import React from "react";
import javascript from "../assets/javascript.png";
import cpp from "../assets/cpp.png";
import react from "../assets/react.webp";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.svg";

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
  ];

  return (
    <div
      className="skills-container p-8 flex flex-col gap-10 mt-16 items-center scroll-mt-24"
      id="skills"
    >
      <h1 className="text-6xl font-semibold mb-6 text-center">Skills</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3  gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-3 border-2 rounded-lg hover:shadow-md hover:shadow-gray-500 transition-shadow duration-400"
          >
            <img
              src={skill.imgs}
              alt={skill.name}
              className="w-16 h-16 object-contain"
            />
            <h2 className="text-lg font-semibold">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
