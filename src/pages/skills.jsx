import Footer from "../components/footer";


export default function Skills() {
  const skillSections = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Django REST", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }, 
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
        { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
        { name: "Microsoft Teams"},
       
      ]
    }
  ];

  return (
  <div className="flex flex-col min-h-screen">
    {/* Main content */}
    <main className="flex-grow p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-left mb-8">Skills & Technologies</h1>

      {skillSections.map((section, i) => (
        <div key={i} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {section.skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition border border-gray-300"
              >
                {skill.icon ? (
                  typeof skill.icon === "string" ? (
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3" />
                  ) : (
                    <div className="w-12 h-12 mb-3">{skill.icon}</div>
                  )
                ) : (
                  // Show the name above the label when no icon
                  <span className="text-lg font-semibold mb-3">{skill.name}</span>
                )}
                <span className="text-lg font-medium text-tealBlue">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>

    {/* Sticky Footer */}
    <Footer />
  </div>
);
}