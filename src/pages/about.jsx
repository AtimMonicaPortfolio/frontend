import Footer from "../components/footer";
import MyImage from "../assets/about2.jpg";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-between">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>

        {/* 4 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* IMAGE GRID (Top-left) */}
          <div className="flex justify-left">
            <img
              src={MyImage}
              alt="Atim Monica"
              className="w-64 h-65 object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* INTRODUCTION + EDUCATION (Top-right) */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Introduction & Education</h2>
            <p className="leading-relaxed mb-4">
              I’m <span className="font-semibold">Atim Monica</span>, a freelance 
              <span className="font-semibold"> Software Developer</span>. I often call myself 
              <span className="font-semibold"> the Lioness Coder</span> because of my passion 
              and determination for tech.
            </p>


            <p className="leading-relaxed mb-4">
              I hold a <span className="font-semibold">Bachelor of Accounting and Finance</span> 
              and a <span className="font-semibold">Diploma in Computer Science</span>, which 
              strengthened my foundation in software development, databases, and analytical 
              problem-solving. My growth in tech has also been shaped by intensive programs such 
              as the <span className="font-semibold">
              Refactory Software Development Apprenticeship Program</span>, along with 
              practical bootcamps that accelerated my journey.
            </p>
          </div>

          {/* JOURNEY IN TECH (Bottom-left) */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">My Journey in Tech</h2>
            <p className="leading-relaxed">
              My journey into technology began through my early proficiency with accounting 
              software such as QuickBooks and Tally. Working with these tools sparked my 
              curiosity about how systems are built, how data flows behind the scenes, and 
              how automation simplifies work. This interest led me to explore programming, 
              starting with Python, then advancing into backend frameworks, databases, and 
              API development.
            </p>
          </div>

          {/* HOBBIES + INTERESTS (Bottom-right) */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Interests & Hobbies</h2>
            <p className="leading-relaxed">
              Outside of software development, I enjoy hands-on crafts, creative problem 
              solving, and community engagement. I love exploring new technologies, 
              improving systems through innovation, and participating in programs that 
              empower young people in tech. I also enjoy personal development activities 
              and contributing to meaningful initiatives.
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
