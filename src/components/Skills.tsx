import { Code, Palette, Calculator } from 'lucide-react';

export default function Skills() {
  const technicalSkills = [
    "Python", "Java", "C", "JavaScript", "TensorFlow", "PyTorch",
    "Scikit-learn", "Transformers", "Firebase", "AWS", "Next.js",
    "Node.js", "Raspberry Pi", "OpenCV", "Git/GitHub", "LaTeX"
  ];

  const creativeSkills = [
    "Adobe Premiere Pro", "After Effects", "Photoshop", "Illustrator",
    "Canva", "Motion Graphics", "YouTube Optimization", "Color Grading",
    "Video Editing", "Graphic Design", "Typography", "Branding"
  ];

  const mathSkills = [
    "Linear Algebra", "Probability & Statistics", "Optimization Theory",
    "Calculus", "Discrete Mathematics", "Numerical Methods"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-950 via-pink-950/50 to-blue-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card group hover:scale-105 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl w-fit mb-4 group-hover:rotate-6 transition-transform">
              <Code className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="px-3 py-1.5 bg-purple-900/50 text-pink-300 rounded-lg text-sm font-semibold border border-pink-500/30 hover:border-pink-500/60 hover:bg-purple-900/70 transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="feature-card group hover:scale-105 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl w-fit mb-4 group-hover:rotate-6 transition-transform">
              <Palette className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Creative Skills</h3>
            <div className="flex flex-wrap gap-2">
              {creativeSkills.map((skill, index) => (
                <span key={index} className="px-3 py-1.5 bg-purple-900/50 text-cyan-300 rounded-lg text-sm font-semibold border border-cyan-500/30 hover:border-cyan-500/60 hover:bg-purple-900/70 transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="feature-card group hover:scale-105 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl w-fit mb-4 group-hover:rotate-6 transition-transform">
              <Calculator className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Mathematics</h3>
            <div className="flex flex-wrap gap-2">
              {mathSkills.map((skill, index) => (
                <span key={index} className="px-3 py-1.5 bg-purple-900/50 text-purple-300 rounded-lg text-sm font-semibold border border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-900/70 transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
