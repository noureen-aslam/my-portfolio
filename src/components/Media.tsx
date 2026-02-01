import { Video, Palette, Sparkles, TrendingUp } from 'lucide-react';

export default function Media() {
  return (
    <section id="media" className="py-20 bg-gradient-to-br from-purple-950 via-pink-950/50 to-blue-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Creative Media Experience</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="feature-card group hover:scale-102 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl group-hover:rotate-6 transition-transform">
                <Video className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Brawny Infotech</h3>
                <p className="text-cyan-300 font-semibold mb-3">Video Editor & Motion Graphics Designer</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2"></div>
                    <span>Professional video editing for marketing campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                    <span>Motion graphics and animated content creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Brand identity development and visual storytelling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="feature-card group hover:scale-102 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:rotate-6 transition-transform">
                <Palette className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Freelance Creative</h3>
                <p className="text-cyan-300 font-semibold mb-3">Video Editor & Graphic Designer</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                    <span>Custom video editing for diverse clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                    <span>Graphic design for social media and branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2"></div>
                    <span>Content optimization for digital platforms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="feature-card text-center group hover:scale-105 transition-transform">
            <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full w-fit mx-auto mb-4 group-hover:rotate-12 transition-transform">
              <Sparkles className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Creative Showcase</h3>
            <p className="text-gray-300 text-sm">Thumbnails, reels, and motion graphics samples demonstrating versatile design capabilities</p>
          </div>

          <div className="feature-card text-center group hover:scale-105 transition-transform">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-full w-fit mx-auto mb-4 group-hover:rotate-12 transition-transform">
              <Video className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Video Portfolio</h3>
            <p className="text-gray-300 text-sm">Professional video editing work across multiple formats and industries</p>
          </div>

          <div className="feature-card text-center group hover:scale-105 transition-transform">
            <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4 group-hover:rotate-12 transition-transform">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">YouTube Optimization</h3>
            <p className="text-gray-300 text-sm">Expert in content optimization, SEO, and engagement strategies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
