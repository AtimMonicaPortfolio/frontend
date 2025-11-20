import Footer from "../components/footer";
import quizzyImg from "../assets/quizzy.jpg"; 
import budgetMilesVideo from "../assets/Budget Mile -demo.mp4";

export default function Projects() {
  const projects = [
    {
      title: "Quizzy Hackathon App",
      description:
        "A quiz application that boosts engagement and learning for trainers and students.",
      stack: "React • Django • REST API",
      liveDemo: "https://nextgen-quiz-app.vercel.app",
      media: quizzyImg,
      isVideo: false,
    },
    {
      title: "Managers Business Association SACCO System",
      description:
        "Streamlined financial data processes with bookkeeping and reporting improvements.",
      stack: "Python • Accounting Tools",
      liveDemo: null,
      media: null, // no media
      isVideo: false,
    },
    {
      title: "Fuel Management System (Budget Miles)",
      description:
        "Journey planning, fuel optimization and digital payments for transport efficiency.",
      stack: "React Native • Flask • PostgreSQL",
      liveDemo: null,
      media: budgetMilesVideo,
      isVideo: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-6 bg-gray-100 border-l-4 border-tigerGold rounded shadow flex flex-col gap-4"
            >
              <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
              
              {p.media && (
                p.isVideo ? (
                  <video controls className="w-full h-auto rounded">
                    <source src={p.media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={p.media} alt={p.title} className="w-full h-48 object-cover rounded" />
                )
              )}

              <p className="mb-2">{p.description}</p>
              <span className="text-tealBlue font-medium">{p.stack}</span>

              {p.liveDemo && (
                <a
                  href={p.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block bg-tigerGold text-white py-2 px-4 rounded hover:bg-deepBlue transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
