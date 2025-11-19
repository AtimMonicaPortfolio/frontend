import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow mt-10 max-w-4xl mx-auto p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hello, I’m <span className="text-tigerGold">Atim Monica</span>
        </h1>

        <p className="text-lg max-w-3xl leading-relaxed mb-6">
          Backend Developer skilled in Python, Django REST Framework, Flask, React, and
          data analysis. I combine analytical problem-solving with clean code practices
          to create efficient backend systems.
        </p>

        <div className="flex gap-4">
          <a
            href="/projects"
            className="bg-tigerGold text-white px-6 py-3 rounded-lg shadow hover:bg-deepBlue transition"
          >
            View My Work
          </a>

          <a
            href="/Atim Monica CV01.pdf"
            download
            className="flex items-center gap-2 bg-tealBlue text-white px-6 py-3 rounded-lg shadow hover:bg-deepBlue transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}
