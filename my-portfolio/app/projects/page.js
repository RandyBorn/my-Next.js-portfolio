const projects = [
  {
    name: "Abschluss-Projekt-javascribt",
    description: "",
    language: "JavaScript",
  },
  {
    name: "online-shop",
    description: "Warenkauf-Option",
    language: "JavaScript",
  },
  {
    name: "Color-Picker-Tool",
    description: "Color-Picker-Tool-Projekt",
    language: "JavaScript",
  },
  {
    name: "Random-Quote-Generator",
    description: "Random-Quote-Generator",
    language: "JavaScript",
  },
];
export default function ProjectsPage() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Meine Projekte</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-gray-700 p-4 rounded-lg"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Sprache: {project.language}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
