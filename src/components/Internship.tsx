import { Briefcase, Code2 } from 'lucide-react';

export default function Internship() {
  const projects = [
    {
      title: "Resume Builder Tool",
      description: "Built using React.js, Node.js, and MongoDB. Implemented dynamic form handling and PDF export functionality.",
      tech: ["React.js", "Node.js", "MongoDB", "PDF Export"]
    },
    {
      title: "Shophera E-Commerce Website",
      description: "Developed with Next.js, Firebase, and Tailwind CSS. Integrated secure authentication and product analytics.",
      tech: ["Next.js", "Firebase", "Tailwind CSS", "Auth"]
    },
    {
      title: "Startup Landing Page",
      description: "Designed with HTML, CSS, JavaScript, and Bootstrap. Focused on responsive UI and branding consistency.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    }
  ];

  return (
    <section id="internship" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Internship Experience</h2>

        <div className="max-w-5xl mx-auto">
          <div className="feature-card group hover:scale-102 transition-all duration-300 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl group-hover:rotate-6 transition-transform">
                <Briefcase className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-2">Tamizan Technologies</h3>
                <p className="text-cyan-300 font-semibold text-lg">Full-Stack Development Intern</p>
              </div>
            </div>
 <div className="mb-8">
              <img
                src="images/TAMIZAN COMPLETION.jpg"
                alt="Completion Certificate"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg border border-pink-500/30"
              />
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="p-5 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl border border-pink-500/30 hover:border-pink-500/50 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <Code2 className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-900/60 text-pink-300 rounded-full text-xs font-semibold border border-pink-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
