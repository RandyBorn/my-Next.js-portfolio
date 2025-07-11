"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./globals.css";

export default function HomePage() {
  const fullText =
    "Welcome to my portfolio! I am a passionate web developer from Nordrhein-Westfalen Oberhausen, specializing in modern JavaScript frameworks, Node.js, and Tailwind CSS. Explore my skills, projects, and get to know more about me.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-7 text-white max-w-4xl mx-auto">
        <h1
          className="text-5xl sm:text-6xl font-extrabold text-center
                   bg-gradient-to-r from-gray-600 via-purple-500 to-blue-500
                   bg-clip-text text-transparent animate-gradient
                   mb-9"
        >
          Hallo zusammen! Ich bin Randy Born 👋
        </h1>
        <p className="max-w-xl text-center text-lg sm:text-xl leading-relaxed whitespace-pre-wrap h-24">
          {displayedText}
          <span className="animate-blink">|</span>
        </p>

        <div className="mt-40">
          <a
            href="/about"
            className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded transition-colors duration-400"
          >
            Über mich
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-2 mt-20 text-center text-amber-50">
          Technologien und Tools
        </h2>
      </div>

      <section className="mt-10 max-w-4xl mx-auto space-y-8 kenburns-right">
        <p
          className="bg-white/20 
    backdrop-blur-md 
    shadow-lg 
    rounded-xl 
    p-6 
    space-y-6 
    text-white
    border border-white/50
    hover:bg-white/30
    hover:scale-105
    active:scale-105
    transform 
    transition duration-200"
        >
          <strong>HTML5</strong>
          <br />
          HTML5 ist die neueste Version der Sprache, mit der Webseiten
          strukturiert werden. Damit kann ich dafür sorgen, dass Texte, Bilder,
          Videos und andere Inhalte auf allen Geräten und Browsern richtig
          dargestellt werden.
        </p>

        <p
          className="bg-white/20 
    backdrop-blur-md 
    shadow-lg 
    rounded-xl 
    p-6 
    space-y-6 
    text-white
    border border-white/50
    hover:bg-white/30
    hover:scale-105
    active:scale-105
    transform 
    transition duration-200"
        >
          <strong>CSS3 / SASS</strong>
          <br />
          Mit CSS3 gestalte ich das Aussehen meiner Webseite Farben, Schriften,
          Abstände und das gesamte Layout. Dadurch wird aus einer einfachen
          HTML-Struktur eine ansprechende und benutzerfreundliche Seite. SASS
          nutze ich als Erweiterung von CSS, um Design-Regeln effizienter zu
          schreiben. Es ermöglicht mir zum Beispiel, Variablen und Funktionen zu
          verwenden, was die Wartung und Erweiterung meiner Designs deutlich
          erleichtert.
        </p>

        <p
          className="bg-white/20 
    backdrop-blur-md 
    shadow-lg 
    rounded-xl 
    p-6 
    space-y-6 
    text-white
    border border-white/50
    hover:bg-white/30
    hover:scale-105
    active:scale-105
    transform 
    transition duration-200"
        >
          <strong>JavaScript ES6+</strong>
          <br />
          JavaScript setze ich ein, um meine Webseiten interaktiv zu machen. Die
          neueren Versionen, bekannt als ES6+, bieten viele moderne Funktionen,
          die mir das Programmieren einfacher und effizienter machen. Mit
          JavaScript überprüfe ich beispielsweise Formulare, ändere Inhalte
          dynamisch oder erstelle Animationen, um die Benutzererfahrung zu
          verbessern.
        </p>

        <p
          className="bg-white/20 
    backdrop-blur-md 
    shadow-lg 
    rounded-xl 
    p-6 
    space-y-6 
    text-white
    border border-white/50
    hover:bg-white/30
    hover:scale-105
    active:scale-105
    transform 
    transition duration-200"
        >
          <strong>React</strong>
          <br />
          Mit React entwickle ich komplexe Benutzeroberflächen, indem ich sie in
          kleine, wiederverwendbare Komponenten zerlege. Dadurch kann ich auch
          große Webseiten übersichtlich und effizient umsetzen. Besonders
          schätze ich an React, dass Änderungen an Daten sofort sichtbar werden
          ganz ohne die gesamte Seite neu laden zu müssen.
        </p>

        <p
          className="bg-white/20 
    backdrop-blur-md 
    shadow-lg 
    rounded-xl 
    p-6 
    space-y-6 
    text-white
    border border-white/50
    hover:bg-white/30
    hover:scale-105
    active:scale-105
    transform 
    transition duration-200"
        >
          <strong>Node.js / Express</strong>
          <br />
          Mit Node.js kann ich JavaScript auch auf dem Server ausführen. In
          Kombination mit dem Framework Express programmiere ich Server, die
          Anfragen von Nutzern empfangen, verarbeiten und passende Antworten
          zurückschicken. So ermögliche ich es meiner Webseite, Daten zu
          speichern, Benutzer zu verwalten oder Nachrichten zu versenden.
        </p>

        <p
          className="bg-white/20 
    backdrop-blur-md 
    shadow-lg 
    rounded-xl 
    p-6 
    space-y-6 
    text-white
    border border-white/50
    hover:bg-white/30
    hover:scale-105
    active:scale-105
    transform 
    transition duration-200"
        >
          <strong>MongoDB / Mongoose</strong>
          <br />
          Für meine Webprojekte verwende ich MongoDB, eine moderne und flexible
          Datenbank, die Informationen in sogenannten „Dokumenten“ speichert
          ideal für dynamische Anwendungen. Mit der Bibliothek Mongoose erstelle
          ich strukturierte Datenmodelle und kann die Datenbank effizient und
          unkompliziert ansprechen.
        </p>

        <p
          className="bg-white/20 
    backdrop-blur-md 
    shadow-lg 
    rounded-xl 
    p-6 
    space-y-6 
    text-white
    border border-white/50
    hover:bg-white/30
    hover:scale-105
    active:scale-105
    transform 
    transition duration-200"
        >
          <strong>TailwindCSS</strong>
          <br />
          TailwindCSS setze ich ein, um das Design meiner Webseiten schnell und
          systematisch umzusetzen. Das moderne CSS-Framework stellt mir viele
          vorgefertigte Klassen zur Verfügung, mit denen ich ein einheitliches
          Erscheinungsbild erreiche ganz ohne große Mengen an eigenem CSS-Code
          schreiben zu müssen.
        </p>

        <p
          className="bg-white/20 
    backdrop-blur-md 
    shadow-lg 
    rounded-xl 
    p-6 
    space-y-6 
    text-white
    border border-white/50
    hover:bg-white/30
    hover:scale-105
    active:scale-105
    transform 
    transition duration-200"
        >
          <strong>Git & GitHub</strong>
          <br />
          Git nutze ich als Versionskontrollsystem, um alle Änderungen an meinem
          Code nachvollziehbar zu speichern. So kann ich jederzeit zu früheren
          Versionen zurückkehren oder parallel an verschiedenen Funktionen
          arbeiten. Mit GitHub speichere ich meine Projekte online, teile sie
          mit anderen und arbeite gemeinsam mit anderen Entwicklern daran.
        </p>

        <p
          className="bg-white/20 
    backdrop-blur-md 
    shadow-lg 
    rounded-xl 
    p-6 
    space-y-6 
    text-white
    border border-white/50
    hover:bg-white/30
    hover:scale-105
    active:scale-105
    transform 
    transition duration-200"
        >
          <strong>Markdown</strong>
          <br />
          Markdown ist eine einfache Auszeichnungssprache, mit der man Texte
          schnell und übersichtlich formatieren kann ideal für Dokumentationen
          oder Blogbeiträge.
        </p>

        <p
          className="bg-white/20 
    backdrop-blur-md 
    shadow-lg 
    rounded-xl 
    p-6 
    space-y-6 
    text-white
    border border-white/50
    hover:bg-white/30
    hover:scale-105
    active:scale-105
    transform 
    transition duration-200"
        >
          <strong>Vercel / Netlify</strong>
          <br />
          Diese beiden Plattformen erlauben es, Webseiten mit wenigen Klicks
          online zu stellen. Sie kümmern sich um das Hosting, sorgen für
          schnelle Ladezeiten und bieten oft automatische Updates bei neuen
          Änderungen.
        </p>

        <p
          className="bg-white/20 
    backdrop-blur-md 
    shadow-lg 
    rounded-xl 
    p-6 
    space-y-6 
    text-white
    border border-white/50
    hover:bg-white/30
    hover:scale-105
    active:scale-105
    transform 
    transition duration-200"
        >
          <strong>Postman</strong>
          <br />
          Postman ist ein Werkzeug, mit dem APIs getestet werden können. APIs
          sind Schnittstellen, über die unterschiedliche Programme miteinander
          kommunizieren. Mit Postman können diese Verbindungen geprüft werden,
          um sicherzustellen, dass alles reibungslos funktioniert.
        </p>

        <p
          className="bg-white/20 
    backdrop-blur-md 
    shadow-lg 
    rounded-xl 
    p-6 
    space-y-6 
    text-white
    border border-white/50
    hover:bg-white/30
    hover:scale-105
    active:scale-105
    transform 
    transition duration-200"
        >
          <strong>VS Code</strong>
          <br />
          Visual Studio Code ist mein bevorzugter Code-Editor, da er viele
          praktische Funktionen wie Autovervollständigung, Fehleranzeige und
          eine große Auswahl an Erweiterungen bietet. Mit diesen Tools kann ich
          effizienter arbeiten und Fehler schneller erkennen und beheben.
        </p>
      </section>

      <div className="mt-16 text-center">
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
