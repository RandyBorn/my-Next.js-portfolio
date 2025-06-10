import React from "react";
export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">
        Über mich
      </h2>
      <div
        className="
          bg-white/20 
          backdrop-blur-md 
          shadow-lg 
          rounded-xl 
          p-6 
          space-y-6 
          text-white
          border border-white/50
          hover:bg-white/30
          transition-colors duration-200
        "
      >
        <div>
          <p className="text-lg leading-relaxed">
            Ich bin 26 Jahre alt und komme aus Oberhausen. Nach meiner
            Ausbildung zum Glasverfahrensmechaniker habe ich meine Leidenschaft
            für Webentwicklung entdeckt.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Aktuell bilde ich mich zum Fullstack Webentwickler am Digital Career
            Institute in Berlin weiter. Ich arbeite mit modernen Technologien
            wie <span className="font-semibold">React, Node.js, MongoDB</span>{" "}
            und <span className="font-semibold">Tailwind CSS</span>.
            Analytisches Problemlösen und Teamarbeit machen mir viel Freude.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mt-6 mb-2">Kontakt</h3>
          <ul className="space-y-1 text-lg">
            <li>
              📧 E-Mail:{" "}
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
