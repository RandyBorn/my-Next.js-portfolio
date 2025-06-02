import React from "react";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
      <div className="bg-gray-700 text-white p-6 rounded-xl space-y-6 shadow-lg">
        <div>
          <p className="text-lg leading-relaxed">
            I am 26 years old and from Oberhausen. After completing my training
            as a glass processing mechanic, I discovered my passion for web
            development.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I am currently training as a Fullstack Web Developer at the Digital
            Career Institute in Berlin. I work with modern technologies like
            <span className="font-semibold"> React, Node.js, MongoDB</span>,
            <span className="font-semibold">Tailwind CSS</span>. I enjoy solving
            problems analytically and working in teams.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mt-6 mb-2">Contact</h3>
          <ul className="space-y-1 text-lg">
            <li>
              📧 Email:{" "}
              <a
                href="mailto:randyborn677@yahoo.com"
                className="text-blue-300 hover:underline"
              >
                randyborn677@yahoo.com
              </a>
            </li>
            <li>
              💼 GitHub:{" "}
              <a
                href="https://github.com/RandyBorn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                RandyBorn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
