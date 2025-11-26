"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title:
      "Freelancer Website (Demo-Projekt) Next.js + TypeScript + TailwindCSS",
    href: "https://freelancer-zize.vercel.app/",
    badge: "Freelancer",
    description:
      "Meine eigene Freelancer-Seite: Landingpage mit Paketen, Tech-Stack und Kontakt klar strukturiert und auf Conversion optimiert. Schnell, responsiv & modern.",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    cta: "Live ansehen",
  },

  {
    title: "D07 Movie & TV DB Film- & Serienplattform",
    href: "https://movie-tv-db-seven.vercel.app/",
    badge: "Movie App",
    description:
      "Web-App zum Entdecken von Filmen & Serien: Startseite mit Hero-Section, beliebten Inhalten und strukturierten Detailinfos. Fokus auf klare UI, schnelle Orientierung und saubere Komponentenstruktur.",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "OMDb API"],
    cta: "Live ansehen",
  },

  {
    title: "Polls Umfrage Tool Next.js + TypeScript",
    href: "https://my-next-app-typescript-1nqk.vercel.app/",
    badge: "Neu",
    description:
      "Umfragen ohne DB: Server Actions, API-Route fürs Voting, strikte TS-Typen und Zod-Validierung.",
    stack: ["Next.js", "TypeScript", "Zod", "API Routes", "Server Actions"],
    cta: "Live ansehen",
  },

  {
    title: "Projekt Liefrik - Lieferando-Klon",
    href: "https://liefrik.vercel.app/",
    badge: "Fullstack Abschlussprojekt",
    description:
      "Fullstack Essensbestell-Plattform im Stil von Lieferando: Restaurants und Menüs verwalten, Speisekarten anzeigen, Warenkorb & Checkout, geschützte Bereiche mit Rollen (Admin/User), Bestellübersicht inkl. Statusverwaltung sowie eigene REST-API mit MongoDB-Anbindung.",
    stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "JWT"],
    cta: "Live ansehen",
  },

  {
    title: "Habit & Goal Tracker App",
    href: "https://habit-goal-tracker-app.vercel.app/",
    badge: "Produktivität",
    description:
      "Tracke deine täglichen Gewohnheiten und langfristigen Ziele. Mit Next.js und React umgesetzt Fokus auf klare UI, einfache Bedienung und motivierendes Nutzererlebnis.",
    stack: ["Next.js", "React", "TailwindCSS"],
    cta: "Live ansehen",
  },

  {
    title: "Schere, Stein, Papier - Mini-Game",
    href: "https://schere-stein-papier.vercel.app/",
    badge: "Mini-Game",
    description:
      "Kleines Browser-Game: Schere-Stein-Papier mit klarer UI und flüssigen Interaktionen umgesetzt in TypeScript. Perfekt, um schnelle Spielmechanik und State-Handling zu zeigen.",
    stack: ["HTML", "TypeScript", "JavaScript", "CSS"],
    cta: "Jetzt spielen",
  },

  {
    title: "Globale Themen Projekt",
    href: "https://globale-themen.vercel.app/",
    description:
      "Moderne HTML/CSS-Seite über globale Herausforderungen (Umwelt, Bildung, Gesundheit) mit Kontaktformular und sanften Scroll-Animationen.",
    stack: ["HTML", "CSS", "JavaScript"],
    cta: "Live ansehen",
  },

  {
    title: "Auto Next.js Projekt",
    href: "https://auto-nextjs-project-ebon.vercel.app/",
    description:
      "Responsives Next.js-Template mit TailwindCSS optimiert für Performance, ideal als Produkt-/Showcase-Basis.",
    stack: ["Next.js", "TailwindCSS"],
    cta: "Live ansehen",
  },

  {
    title: "Jobportal Backend API",
    href: "https://backend-test-gbj6.onrender.com/",
    description:
      "REST-API für ein Jobportal (Node.js/Express/MongoDB). Unternehmen posten Jobs, Bewerbende bewerben sich. Sichtbar über API-Clients wie Postman.",
    stack: ["Node.js", "Express", "MongoDB", "REST"],
    cta: "API öffnen",
  },

  {
    title: "Fullstack Book Tracker",
    href: "https://fullstack-frontend-backend-book-tra.vercel.app/",
    description:
      "React-Frontend + Express-Backend mit Benutzer-Auth und Buchverwaltung. Responsiv und auf Performance getrimmt.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    cta: "Live ansehen",
  },

  {
    title: "Projekt GYM FIT",
    href: "https://projekt-bay-eight.vercel.app/",
    description:
      "Kreative One-Pager-Webapp mit Fokus auf klares Layout, saubere Struktur und schnelle Ladezeiten ideal für Fitness-Studios.",
    stack: ["HTML", "CSS"],
    cta: "Live ansehen",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ProjectCard({ p, index }) {
  return (
    <motion.li
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      custom={index}
      className="group list-none"
    >
      {/* Gradient border */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-amber-300/70 via-purple-500/40 to-blue-600/50 transition-transform duration-300 group-hover:scale-[1.01]">
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${p.title} – ${p.cta}`}
          className="block h-full"
        >
          <div className="rounded-2xl bg-gray-900/90 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/5 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                  {p.title}
                </h3>
                {p.badge && (
                  <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-amber-300 text-gray-900 text-[10px] md:text-xs font-semibold px-2.5 py-1">
                    <span className="size-1.5 rounded-full bg-gray-900/60" />
                    {p.badge}
                  </span>
                )}
              </div>

              <p className="text-sm md:text-base text-gray-300/90 leading-relaxed mb-6">
                {p.description}
              </p>

              {p.stack?.length > 0 && (
                <ul className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-amber-300 group-hover:text-white transition-colors text-sm font-medium">
                  {p.cta} <span aria-hidden>→</span>
                </span>

                {/* Subtle hover flourish */}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white/50">
                  Neue Seite öffnet sich
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </motion.li>
  );
}

export default function ProjectsPage() {
  return (
    <div className="relative">
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-1">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-amber-400/20 blur-3xl rounded-full" />
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
            Ausgewählte Arbeiten
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Projekte, die zeigen, wie ich Produkte baue
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl">
            Von Full-Stack-Apps mit Auth & Bestell-Flow bis hin zu API-Services
            und performanten Frontends. Fokus: saubere Architektur, Developer-UX
            und reale Use-Cases.
          </p>
        </motion.header>

        {/* Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </ul>
      </section>
    </div>
  );
}
