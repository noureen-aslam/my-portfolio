import { ExternalLink, Brain, Shield, Camera, Cpu, ShoppingBag, Building } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: Brain,
      title: "Sentiment Classification Research",
      description: "Published research on advanced sentiment analysis using machine learning techniques.",
      tech: ["Python", "TensorFlow", "NLP", "Research"],
      link: "https://doi.org/10.5281/zenodo.17474067",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "LLM-Augmented Phishing Simulation",
      description: "Advanced cybersecurity project using Large Language Models for phishing detection and simulation.",
      tech: ["LLM", "Security", "Python", "AI"],
      gradient: "from-purple-500 to-cyan-600"
    },
    {
      icon: Camera,
      title: "Smart Calorie Counter",
      description: "Computer vision application using OCR and OpenCV for automatic calorie tracking from food images.",
      tech: ["OpenCV", "OCR", "Python", "CV"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Cpu,
      title: "MSME IoT Support System",
      description: "IoT-based solution for small and medium enterprises with Raspberry Pi integration.",
      tech: ["IoT", "Raspberry Pi", "Python", "Hardware"],
      gradient: "from-blue-500 to-pink-600"
    },
    {
      icon: ShoppingBag,
      title: "Shophera E-Commerce Platform",
      description: "Full-featured e-commerce website with modern UI/UX and secure payment integration.",
      tech: ["Next.js", "Firebase", "Tailwind"],
      gradient: "from-pink-500 to-orange-600"
    },
    {
      icon: Building,
      title: "PrimeProperties Website",
      description: "Professional real estate website with property listings and advanced search features.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://www.primepropertiesbangalore.in/",
      gradient: "from-orange-500 to-purple-600"
    },
    {
      icon: Building,
      title: "CoolWorld Website",
      description: "Modern business website with responsive design and interactive features.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://cool-world.in/",
      gradient: "from-purple-500 to-cyan-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Research & Technical Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="feature-card group hover:scale-105 transition-all duration-300">
              <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-lg w-fit mb-4 group-hover:rotate-6 transition-transform`}>
                <project.icon className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-900/50 text-pink-300 rounded-full text-xs font-semibold border border-pink-500/30">
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  {project.link.includes('doi.org') ? 'View Research' : 'Visit Website'}
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
