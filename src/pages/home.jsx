import Footer from "../components/footer";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main 
        className="flex-grow mt-10 max-w-4xl mx-auto p-6 
        w-full                                  
        "
      >
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 
          text-center sm:text-left               
          "
        >
          Hello, I’m <span className="text-tigerGold">Atim Monica</span>
        </h1>

        <p 
          className="text-base sm:text-lg        
          max-w-3xl leading-relaxed mb-6 
          text-center sm:text-left               
          "
        >
          <span className="font-semibold"> Software Developer </span>
          specializing in 
          <span className="font-semibold"> Backend Development</span>.
          I work with Python, Django REST Framework, Flask, and Node.js to build efficient
          backend systems and clean API structures. I also use React to deliver smooth
          user-facing functionality. My approach combines analytical problem-solving with
          clean, maintainable code to create reliable and scalable software solutions.
        </p>

        <div 
          className="flex flex-col sm:flex-row   
          gap-4 
          items-center sm:items-start            
          "
        >
        
          <Link
            to="/projects"
            className="bg-tigerGold text-white px-6 py-3 rounded-lg shadow 
                      hover:bg-deepBlue transition
                      w-full sm:w-auto
                      text-center"
          >
            View My Work
          </Link>

          <a
            href="/Atim Monica CV01.pdf"
            download
            className="flex items-center justify-center gap-2  
            bg-tealBlue text-white px-6 py-3 rounded-lg shadow hover:bg-deepBlue transition
            w-full sm:w-auto                                    
            "
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
