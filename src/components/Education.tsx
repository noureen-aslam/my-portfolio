import { GraduationCap, Book } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-purple-950 via-pink-950/50 to-blue-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Education</h2>

        <div className="max-w-4xl mx-auto">
          <div className="feature-card group hover:scale-102 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl group-hover:rotate-6 transition-transform">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">B.Tech in Computer Science & Engineering</h3>
                <p className="text-cyan-300 font-semibold mb-2">Presidency University, Bengaluru</p>
                <p className="text-gray-400 mb-4">2023 - 2027 (Expected)</p>

                <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg border border-pink-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Book className="text-cyan-400" size={20} />
                    <h4 className="text-lg font-semibold text-white">Relevant Coursework & Foundations</h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                      <span>Data Structures & Algorithms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span>Linear Algebra</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Probability & Statistics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                      <span>Optimization Theory</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>Database Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span>Web Technologies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Computer Networks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
