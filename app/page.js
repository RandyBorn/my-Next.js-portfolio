"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import "./globals.css";

// --- Cookie Helpers ---
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const parts = decodedCookie.split(";");
  for (let part of parts) {
    const c = part.trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length);
    }
  }
  return "";
}

export default function HomePage() {
  // --- Typing Text ---
  const fullText =
    "Welcome to my portfolio! I am a passionate web developer from Nordrhein-Westfalen (Oberhausen), specializing in modern JavaScript frameworks, Node.js, and Tailwind CSS. Explore my skills, projects, and get to know more about me.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  // --- Cookie Banner State ---
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setDisplayedText(fullText);
      setIsDone(true);
      return;
    }

    let index = 0;
    const speed = 35;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [fullText]);

  // --- Cookie Banner: beim Laden prüfen, ob schon zugestimmt wurde ---
  useEffect(() => {
    if (typeof document === "undefined") return;
    const consent = getCookie("cookie_consent");
    if (consent !== "true") {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    setCookie("cookie_consent", "true", 365); // 1 Jahr
    setShowCookieBanner(false);
  };

  // --- Data for Skills/Tools ---
  const tools = useMemo(
    () => [
      {
        title: "HTML5",
        body: "Neueste Auszeichnungssprache für saubere Semantik und zugängliche Strukturen – Basis für performante Oberflächen.",
      },
      {
        title: "CSS3 / SASS",
        body: "Modulares Styling, Variablen & Mixins für wartbare Designs. Saubere Layouts, flexible Typografie, konsistente Spacing-Skala.",
      },
      {
        title: "JavaScript ES6+",
        body: "Moderne Spracheigenschaften für zuverlässige Interaktivität, State Management und robuste Frontend-Logik.",
      },
      {
        title: "React",
        body: "Komponentenbasiert, wiederverwendbar und reaktiv. Ideal für komplexe UIs, Forms, Routing und Client State.",
      },
      {
        title: "Node.js / Express",
        body: "APIs und Serverlogik: Auth, Validierung, File-Handling, Caching – sauber versionierte REST-Endpunkte.",
      },
      {
        title: "MongoDB / Mongoose",
        body: "Dokumentenorientierte Datenmodelle mit klaren Schemas, Validierung und effizienten Queries.",
      },
      {
        title: "Tailwind CSS",
        body: "Designsystem im Code: konsistente Abstände, Farben und Responsiveness – schnell, lesbar, skalierbar.",
      },
      {
        title: "Git & GitHub",
        body: "Versionskontrolle, Clean Branching, PR-Reviews und CI-Workflows für nachvollziehbare Releases.",
      },
      {
        title: "Markdown",
        body: "Klare Dokumentation, Readmes und technische Notizen – schnell formatierbar und gut lesbar.",
      },
      {
        title: "Vercel / Netlify",
        body: "Schnelles Hosting, Previews pro Branch, Edge-Netzwerk und automatische Deployments.",
      },
      {
        title: "Postman",
        body: "API-Tests, Collections, Environments – verlässliche Schnittstellen und reproduzierbare Requests.",
      },
      {
        title: "VS Code",
        body: "Leistungsfähiger Editor mit IntelliSense, Formatierung, Linting und produktiven Erweiterungen.",
      },
    ],
    []
  );

  return (
    <div className="relative">
      {/* Background Accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-gray-300 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 leading-[1.1]">
            Hallo zusammen! Ich bin Randy Born 👋
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed min-h-[6rem] whitespace-pre-wrap">
            {displayedText}
            <span
              className={`ml-0.5 ${isDone ? "opacity-0" : "animate-blink"}`}
              aria-hidden
            >
              |
            </span>
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md bg-amber-300 px-5 py-2.5 font-semibold text-gray-900 shadow hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              aria-label="Zur Über-mich-Seite"
            >
              Über mich
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              aria-label="Zu den Projekten"
            >
              Projekte ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Technologien & Tools */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-50">
            Technologien & Tools
          </h2>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((item) => (
              <li key={item.title} className="list-none">
                <div className="h-full bg-white/10 border border-white/10 rounded-xl p-6 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/15 hover:translate-y-[-2px]">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/90">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16 mb-14">
        <div className="max-w-5xl mx-auto text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2.5 px-6 rounded-full shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
          >
            Zur Startseite
          </Link>
          <p className="mt-4 text-sm text-white/60">
            © {new Date().getFullYear()} Randy Born · Entwickelt mit Next.js &
            Tailwind CSS
          </p>
        </div>
      </section>
      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 border-t border-white/10 backdrop-blur px-4 py-6 sm:py-8">
          <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-base sm:text-lg text-slate-100">
            <p className="text-center sm:text-left leading-relaxed">
              Diese Website verwendet Cookies, um sich deine Einstellungen zu
              merken. Durch Klicken auf „OK“ stimmst du dem zu.
            </p>
            <button
              onClick={handleAcceptCookies}
              className="inline-flex items-center justify-center rounded-lg bg-amber-300 px-6 py-2.5 font-semibold text-slate-900 shadow-lg hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
