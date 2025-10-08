import React from "react";

export default function AboutPage() {
  return (
    <main className="relative">
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-amber-400/20 blur-3xl rounded-full" />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          Über mich
        </h1>
        <p className="mt-3 text-center text-white/70 max-w-2xl mx-auto">
          Full‑Stack‑Aspirant mit Fokus auf moderne JavaScript‑Stacks, sauberer
          Architektur und produktnahem Denken.
        </p>

        {/* Card */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)] overflow-hidden">
          {/* Top section */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8">
              {/* Avatar placeholder (optional) */}
              <div className="shrink-0 hidden md:block">
                <div
                  className="h-20 w-20 rounded-full bg-gradient-to-tr from-amber-300/80 to-blue-900 ring-2 ring-white/30"
                  aria-hidden
                />
              </div>

              <div className="grow">
                <p className="text-lg leading-relaxed text-white/90">
                  Ich bin 26 Jahre alt und komme aus Oberhausen. Nach meiner
                  Ausbildung zum Glasverfahrensmechaniker habe ich meine
                  Leidenschaft für Webentwicklung entdeckt.
                </p>
                <p className="text-lg leading-relaxed text-white/90 mt-4">
                  Aktuell bilde ich mich zum Full‑Stack‑Webentwickler am Digital
                  Career Institute in Düsseldorf weiter. Ich arbeite mit
                  modernen Technologien wie
                  <span className="font-semibold">
                    {" "}
                    React, Node.js, MongoDB
                  </span>{" "}
                  und
                  <span className="font-semibold"> Tailwind CSS</span>.
                  Analytisches Problemlösen und Teamarbeit machen mir viel
                  Freude.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Skills & Tools
              </h2>
              <ul className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Mongoose",
                  "JWT/Auth",
                  "Tailwind CSS",
                  "REST APIs",
                  "Git/GitHub",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-white mb-3">Kontakt</h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href="mailto:randyborn677@yahoo.com"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-300 px-4 py-2 font-medium text-gray-900 hover:bg-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  aria-label="E‑Mail an randyborn677@yahoo.com senden"
                >
                  <span aria-hidden>📧</span> E‑Mail
                </a>
                <a
                  href="https://github.com/RandyBorn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  aria-label="GitHub‑Profil von RandyBorn öffnen"
                >
                  <span aria-hidden>💼</span> GitHub
                </a>
              </div>
              {/* Plain list for accessibility */}
              <ul className="sr-only">
                <li>E‑Mail: randyborn677@yahoo.com</li>
                <li>GitHub: RandyBorn</li>
              </ul>
            </div>
          </div>

          {/* Footer bar */}
          <div className="px-6 md:px-8 py-4 bg-white/5 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-white/60">
              Letzte Aktualisierung: {new Date().toLocaleDateString("de-DE")}
            </span>
            <span className="text-xs text-white/60"> made by Randy Born</span>
          </div>
        </div>
      </section>
    </main>
  );
}
