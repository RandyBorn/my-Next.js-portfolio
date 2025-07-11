export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto my-18 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-30">
        {/* Erstes Projekt: Globale Themen */}
        <div className="bg-gray-800 rounded-xl hover:bg-blue-950 shadow-md overflow-hidden hover:shadow-purple-500/100 transition-shadow duration-700 kenburns-bottom">
          <a
            href="https://globale-themen.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Globale Themen
              </h3>
              <p className="text-gray-300 mb-9">
                Eine HTML/CSS Webseite über globale Herausforderungen wie
                Umwelt, Bildung und Gesundheit. Mit Kontaktformular und
                Scroll-Animation modern umgesetzt.
              </p>
              <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-amber-300 rounded hover:bg-green-600 transition">
                Projekt ansehen →
              </span>
            </div>
          </a>
        </div>

        {/* Zweites Projekt */}
        <div className="bg-gray-800 rounded-xl hover:bg-blue-950 shadow-md overflow-hidden hover:shadow-purple-500/90 transition-shadow duration-300 kenburns-bottom">
          <a
            href="https://auto-nextjs-project-ebon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Auto Next.js Projekt
              </h3>
              <p className="text-gray-300 mb-9">
                Ein modernes Next.js Projekt mit Tailwind CSS. Responsives
                Design und optimiert für Performance. Ideal für Automobil- oder
                Showcase-Zwecke.
              </p>
              <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-amber-300 rounded hover:bg-green-600 transition">
                Projekt ansehen →
              </span>
            </div>
          </a>
        </div>

        {/* Drittes Projekt: Jobportal Backend */}
        <div className="bg-gray-800 rounded-xl hover:bg-blue-950 shadow-md overflow-hidden hover:shadow-purple-500/90 transition-shadow duration-300 kenburns-bottom">
          <a
            href="https://backend-test-gbj6.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Jobportal Backend API
              </h3>
              <p className="text-gray-300 mb-9">
                Eine REST-API für ein Jobportal, entwickelt mit Node.js, Express
                und MongoDB. Unternehmen können Jobs veröffentlichen, Bewerber
                sich bewerben. Die API ist keine Webseite, sondern nur über das
                Terminal oder API-Clients (z.B. Postman) sichtbar.
              </p>
              <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-amber-300 rounded hover:bg-green-600 transition">
                API öffnen →
              </span>
            </div>
          </a>
        </div>

        {/* Viertes Projekt */}
        <div className="bg-gray-800 rounded-xl shadow-md hover:bg-blue-950 overflow-hidden hover:shadow-purple-500/90 transition-shadow duration-300 kenburns-bottom">
          <a
            href="https://fullstack-frontend-backend-book-tra.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Fullstack Book Tracker
              </h3>
              <p className="text-gray-300 mb-9">
                Ein Fullstack-Projekt mit React-Frontend und
                Node.js/Express-Backend, inklusive Benutzer-Authentifizierung
                und Buchverwaltung, Responsives Design und optimierte
                Performance.
              </p>
              <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-amber-300 rounded hover:bg-green-600 transition">
                Projekt ansehen →
              </span>
            </div>
          </a>
        </div>

        {/* Fünftes Projekt */}
        <div className="bg-gray-800 rounded-xl shadow-md hover:bg-blue-950 overflow-hidden hover:shadow-purple-500/90 transition-shadow duration-300 kenburns-bottom">
          <a
            href="https://projekt-bay-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Projekt GYM FIT
              </h3>
              <p className="text-gray-300 mb-9">
                Eine kreative Webanwendung mit HTML und CSS. Fokus auf Design,
                Struktur und Performance. Mein Erstes Anfangsprojekt – ideal für
                Fitness-Studios.
              </p>
              <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-amber-300 rounded hover:bg-green-600 transition">
                Projekt ansehen →
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
