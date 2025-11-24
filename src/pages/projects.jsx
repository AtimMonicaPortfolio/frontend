import Footer from "../components/footer";
import quizzyImg from "../assets/quizzy.jpg"; 
import budgetMilesVideo from "../assets/Budget Mile -demo.mp4";

export default function Projects() {
  const projects = [
    {
      title: "Budget Miles - Fuel Management System",
      description:
        "Navigation and fuel management app including roles for Customer, Pump Attendant, Station Manager, Corporate, and Super Admin. " +
        "It helps save fuel lost in jams with navigation and jam status reports, enables seamless in-app payments, and facilitates general station management.",
      stack: "React Native • Python • Django • REST APIs",
      liveDemo: null,
      media: budgetMilesVideo,
      isVideo: true,
    },
    {
      title: "Quizzy Hackathon App",
      description:
        "A quiz application that boosts engagement and learning for trainers and students.",
      stack: "JavaScript • React • Node.js • MongoDB • REST API",
      media: quizzyImg,
      isVideo: false,
    },
    {
      title: "Managers Business Association SACCO System",
      description:
        "Streamlined financial data processes with bookkeeping and reporting improvements.",
      stack: "Accounting Tools • Accounting Softwares",
      liveDemo: null,
      media: null, 
      isVideo: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main 
        className="flex-grow max-w-5xl mx-auto p-4 sm:p-6   "
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left ">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6   ">
          
          {/* Top full-width project */}
          <div 
            className="md:col-span-2 p-4 sm:p-6 bg-gray-100 border-l-4 border-tigerGold rounded shadow 
            flex flex-col gap-4 
            "
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{projects[0].title}</h2>

            {projects[0].media && (
              projects[0].isVideo ? (
                <video 
                  controls 
                  className="w-full h-auto rounded object-cover min-h-[200px] sm:min-h-[400px]" 
                >
                  <source src={projects[0].media} type="video/mp4" />
                </video>
              ) : (
                <img 
                  src={projects[0].media} 
                  alt={projects[0].title} 
                  className="w-full h-48 sm:h-64 object-cover rounded "
                />
              )
            )}

            <p className="text-sm sm:text-base mb-2">{projects[0].description}</p>
            <span className="text-tealBlue font-medium text-sm sm:text-base">{projects[0].stack}</span>

          </div>

          {/* Bottom two projects side by side */}
          {projects.slice(1).map((p, i) => (
            <div
              key={i}
              className="p-4 sm:p-6 bg-gray-100 border-l-4 border-tigerGold rounded shadow flex flex-col gap-4"
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">{p.title}</h2>

              {p.media && (
                p.isVideo ? (
                  <video 
                    controls 
                    className="w-full h-auto rounded max-h-64 sm:max-h-96 object-cover"
                  >
                    <source src={p.media} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={p.media} 
                    alt={p.title} 
                    className="w-full h-48 sm:h-64 object-cover rounded"
                  />
                )
              )}

              <p className="text-sm sm:text-base mb-2">{p.description}</p>
              <span className="text-tealBlue font-medium text-sm sm:text-base">{p.stack}</span>

              {p.liveDemo && (
                <a
                  href={p.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block bg-tigerGold text-white py-2 px-4 rounded hover:bg-deepBlue transition
                  text-center w-full sm:w-auto"
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
