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

        <div className="mt-20">
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
          className=" bg-white/20 
          backdrop-blur-md 
          shadow-lg 
          rounded-xl 
          p-6 
          space-y-6 
          text-white
          border border-white/50
          hover:bg-white/30
          transition-colors duration-200"
        >
          <strong>HTML5</strong>
          <br />
          HTML5 ist die neueste Version der Sprache, mit der Webseiten
          strukturiert werden. Es sorgt dafür, dass Texte, Bilder, Videos und
          andere Inhalte auf allen Geräten und Browsern richtig dargestellt
          werden. Durch HTML5 können auch moderne Multimedia-Inhalte einfach
          eingebunden werden, ohne dass zusätzliche Plugins nötig sind
        </p>

        <p
          className=" bg-white/20 
          backdrop-blur-md 
          shadow-lg 
          rounded-xl 
          p-6 
          space-y-6 
          text-white
          border border-white/50
          hover:bg-white/30
          transition-colors duration-200"
        >
          <strong>CSS3 / SASS</strong>
          <br />
          CSS3 bestimmt das Aussehen der Webseite – Farben, Schriften, Abstände
          und das Layout. Mit CSS wird aus einer einfachen HTML-Struktur eine
          ansprechende und benutzerfreundliche Seite. SASS ist eine Erweiterung
          von CSS, die das Schreiben von Design-Regeln deutlich erleichtert. Es
          ermöglicht zum Beispiel das Verwenden von Variablen und Funktionen,
          was die Wartung und Erweiterung von Designs viel einfacher macht.
        </p>

        <p
          className=" bg-white/20 
          backdrop-blur-md 
          shadow-lg 
          rounded-xl 
          p-6 
          space-y-6 
          text-white
          border border-white/50
          hover:bg-white/30
          transition-colors duration-200"
        >
          <strong>JavaScript ES6+</strong>
          <br />
          JavaScript ist die Programmiersprache, die Webseiten interaktiv macht.
          ES6+ bezeichnet die neueren Versionen von JavaScript, die viele
          moderne Funktionen bieten und das Programmieren einfacher und
          effizienter machen. Mit JavaScript können zum Beispiel Formulare
          überprüft, Inhalte dynamisch geändert oder Animationen erstellt
          werden.
        </p>

        <p
          className=" bg-white/20 
          backdrop-blur-md 
          shadow-lg 
          rounded-xl 
          p-6 
          space-y-6 
          text-white
          border border-white/50
          hover:bg-white/30
          transition-colors duration-200"
        >
          <strong>React</strong>
          <br />
          React ist eine Bibliothek, mit der man komplexe Benutzeroberflächen in
          kleine, wiederverwendbare Komponenten zerlegen kann. So lassen sich
          große Webseiten übersichtlich und schnell entwickeln. React ermöglicht
          zudem, dass Nutzer sofort sehen, wenn sich Daten ändern, ohne die
          ganze Seite neu laden zu müssen.
        </p>

        <p
          className=" bg-white/20 
          backdrop-blur-md 
          shadow-lg 
          rounded-xl 
          p-6 
          space-y-6 
          text-white
          border border-white/50
          hover:bg-white/30
          transition-colors duration-200"
        >
          <strong>Node.js / Express</strong>
          <br />
          Node.js erlaubt es, JavaScript auf dem Server auszuführen. Zusammen
          mit dem Framework Express wird der Server programmiert, der z. B.
          Anfragen von Nutzern empfängt, verarbeitet und entsprechende Antworten
          zurückschickt. So kann die Webseite Daten speichern, Benutzer
          verwalten oder Nachrichten austauschen.
        </p>

        <p
          className=" bg-white/20 
          backdrop-blur-md 
          shadow-lg 
          rounded-xl 
          p-6 
          space-y-6 
          text-white
          border border-white/50
          hover:bg-white/30
          transition-colors duration-200"
        >
          <strong>MongoDB / Mongoose</strong>
          <br />
          MongoDB ist eine moderne Datenbank, die besonders flexibel mit Daten
          umgehen kann. Sie speichert Informationen in sogenannten „Dokumenten“,
          was gut zu Webprojekten passt. Mongoose ist eine Bibliothek, die dabei
          hilft, Datenmodelle zu erstellen und die Datenbank einfach zu
          bedienen.
        </p>

        <p
          className=" bg-white/20 
          backdrop-blur-md 
          shadow-lg 
          rounded-xl 
          p-6 
          space-y-6 
          text-white
          border border-white/50
          hover:bg-white/30
          transition-colors duration-200"
        >
          <strong>TailwindCSS</strong>
          <br />
          TailwindCSS ist ein modernes CSS-Framework, das viele fertige Klassen
          bereitstellt, um schnell und systematisch das Aussehen von Webseiten
          zu gestalten. Es sorgt für ein einheitliches Design und reduziert die
          Menge an eigenem CSS-Code.
        </p>

        <p
          className=" bg-white/20 
          backdrop-blur-md 
          shadow-lg 
          rounded-xl 
          p-6 
          space-y-6 
          text-white
          border border-white/50
          hover:bg-white/30
          transition-colors duration-200"
        >
          <strong>Git & GitHub</strong>
          <br />
          Git ist ein System zur Versionskontrolle – es speichert alle
          Änderungen am Code und ermöglicht es, zu älteren Versionen
          zurückzukehren oder gleichzeitig an verschiedenen Funktionen zu
          arbeiten. GitHub ist eine Plattform, auf der Entwickler ihre Projekte
          online speichern, teilen und gemeinsam bearbeiten können.
        </p>

        <p
          className=" bg-white/20 
          backdrop-blur-md 
          shadow-lg 
          rounded-xl 
          p-6 
          space-y-6 
          text-white
          border border-white/50
          hover:bg-white/30
          transition-colors duration-200"
        >
          <strong>Markdown</strong>
          <br />
          Markdown ist eine einfache Auszeichnungssprache, mit der man Texte
          schnell und übersichtlich formatieren kann – ideal für Dokumentationen
          oder Blogbeiträge.
        </p>

        <p
          className=" bg-white/20 
          backdrop-blur-md 
          shadow-lg 
          rounded-xl 
          p-6 
          space-y-6 
          text-white
          border border-white/50
          hover:bg-white/30
          transition-colors duration-200"
        >
          <strong>Vercel / Netlify</strong>
          <br />
          Diese beiden Plattformen erlauben es, Webseiten mit wenigen Klicks
          online zu stellen. Sie kümmern sich um das Hosting, sorgen für
          schnelle Ladezeiten und bieten oft automatische Updates bei neuen
          Änderungen.
        </p>

        <p
          className=" bg-white/20 
          backdrop-blur-md 
          shadow-lg 
          rounded-xl 
          p-6 
          space-y-6 
          text-white
          border border-white/50
          hover:bg-white/30
          transition-colors duration-200"
        >
          <strong>Postman</strong>
          <br />
          Postman ist ein Werkzeug, mit dem APIs getestet werden können. APIs
          sind Schnittstellen, über die unterschiedliche Programme miteinander
          kommunizieren. Mit Postman können diese Verbindungen geprüft werden,
          um sicherzustellen, dass alles reibungslos funktioniert.
        </p>

        <p
          className=" bg-white/20 
          backdrop-blur-md 
          shadow-lg 
          rounded-xl 
          p-6 
          space-y-6 
          text-white
          border border-white/50
          hover:bg-white/30
          transition-colors duration-200"
        >
          <strong>VS Code</strong>
          <br />
          Visual Studio Code ist ein beliebter Code-Editor, der viele praktische
          Funktionen wie Autovervollständigung, Fehleranzeige und Erweiterungen
          bietet. Er hilft Entwicklern, effizienter und mit weniger Fehlern zu
          programmieren.
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
