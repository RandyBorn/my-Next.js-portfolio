"use client";
import { useEffect, useState } from "react";

const skills = [
  "HTML5",
  "CSS3 / SASS",
  "JavaScript (ES6+)",
  "React",
  "Node.js / Express",
  "MongoDB / Mongoose",
  "Tailwind / CSS",
  "Git & GitHub",
  "Markdown",
  "Vercel / Netlify",
  "Postman",
  "VS Code",
];

export default function SkillsSection() {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSkills(true), 5);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-amber-50 text-center mb-50">
        ⚙️ Tech Stack/Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-1xl mx-auto p-4 kenburns-bottom ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`
              transform transition duration-100 ease-out
              opacity-0 translate-y-6
              ${showSkills ? "opacity-100 translate-y-0" : ""}
              delay-${index * 100}
              bg-purple-600 text-amber-50 px-4 py-3 rounded-xl text-center shadow-md hover:scale-105 hover:bg-purple-600 hover:text-white cursor-default
            `}
            style={{ transitionDelay: `${index * 700}ms` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
