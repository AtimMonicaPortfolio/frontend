import Footer from "../components/footer";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-between">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>

        <p className="max-w-3xl mb-6">
          I am a passionate backend developer transitioning from finance to software
          development. My background in accounting and financial analysis strengthens my
          ability to write accurate, efficient, and well-structured backend solutions.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Technical Skills</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-6">
          <li>Python, Django, Flask, REST APIs</li>
          <li>React, JavaScript, HTML, CSS</li>
          <li>PostgreSQL, MySQL, SQL Server, MongoDB</li>
          <li>OAuth, JWT Authentication</li>
          <li>Git, GitHub, Version Control</li>
          <li>Data Analysis with Jupyter Notebooks</li>
        </ul>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </section>
  );
}
