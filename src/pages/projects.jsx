import Footer from "../components/footer";

export default function Projects() {
  const projects = [
    {
      title: "Quizzy Hackathon App",
      description:
        "A quiz application that boosts engagement and learning for trainers and students.",
      stack: "React • Django • REST API",
    },
    {
      title: "Managers Business Association SACCO System",
      description:
        "Streamlined financial data processes with bookkeeping and reporting improvements.",
      stack: "Python • Accounting Tools",
    },
    {
      title: "Fuel Management System (Budget Miles)",
      description:
        "Journey planning, fuel optimization and digital payments for transport efficiency.",
      stack: "React Native • Flask • PostgreSQL",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-6 bg-gray-100 border-l-4 border-tigerGold rounded shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
              <p className="mb-2">{p.description}</p>
              <span className="text-tealBlue font-medium">{p.stack}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}
