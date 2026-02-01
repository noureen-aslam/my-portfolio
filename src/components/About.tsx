import { Code, Palette, Languages } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Computer Science Engineering student at Presidency University, Bengaluru, with a unique blend of technical expertise and creative prowess. My journey spans across AI/ML research, full-stack development, IoT systems, and professional video editing.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As both an engineer and creative storyteller, I bring innovative solutions to complex problems while ensuring they're presented in visually compelling ways. My work has been recognized at state-level hackathons and published in international research journals.
            </p>

            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl border border-pink-500/30">
              <Languages className="text-cyan-400" size={24} />
              <div>
                <div className="text-sm text-gray-400">Languages</div>
                <div className="text-white font-semibold">English, Kannada, Hindi</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="feature-card group hover:scale-105 transition-transform duration-300">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg w-fit mb-3 group-hover:rotate-6 transition-transform">
                <Code className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tech Innovator</h3>
              <p className="text-gray-300">
                Expertise in AI/ML, full-stack development, and IoT systems. Published researcher with hands-on experience in cutting-edge technologies.
              </p>
            </div>

            <div className="feature-card group hover:scale-105 transition-transform duration-300">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg w-fit mb-3 group-hover:rotate-6 transition-transform">
                <Palette className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Creative Designer</h3>
              <p className="text-gray-300">
                Professional video editor and graphic designer with experience in motion graphics, branding, and YouTube optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
