import React from "react";

const Skills = () => {
  const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Tailwind CSS",
    "Bootstrap",
    "NextJS",
  ];
  const backend = [
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "RESTful APIs",
    "JWT",
  ];
  const tools = ["Git", "GitHub", "VS Code", "Zed", "Postman", "Vercel"];
  const operatingSystems = ["Windows", "Linux"];
  const languages = ["Basic Rust", "Basic C++", "Python", "Basic Java"];

  return (
    <div className="flex flex-col justify-start items-start">
      <p className="text-md">
        {`As a MERN stack developer, I have experience in the following technologies:`}
      </p>
      <div className="flex flex-col justify-start items-start gap-2 mt-2">
        <p className="text-lg font-semibold text-green-700">{`Frontend`}</p>
        <ul className="text-md">
          {frontend.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <p className="text-lg font-semibold text-green-700">{`Backend`}</p>
        <ul className="text-md">
          {backend.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <p className="text-lg font-semibold text-green-700">{`Tools`}</p>
        <ul className="text-md">
          {tools.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <p className="text-lg font-semibold text-green-700">
          {`Operating Systems`}
        </p>
        <ul className="text-md">
          {operatingSystems.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <p className="text-lg font-semibold text-green-700">{`Languages`}</p>
        <ul className="text-md">
          {languages.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;