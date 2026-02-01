import { Zap, Target, Users, Heart } from 'lucide-react';

export default function Strengths() {
  const strengths = [
    {
      icon: Zap,
      title: "Fast & Efficient",
      items: ["Rapid editing turnaround", "Quick problem-solving", "Deadline-focused delivery"],
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Target,
      title: "Precision & Quality",
      items: ["Aesthetic judgment", "Typography expertise", "Consistent quality"],
      gradient: "from-pink-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Collaboration",
      items: ["Strong communication", "Team player mindset", "Adaptable workflow"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Creative Storytelling",
      items: ["Visual narrative skills", "Brand understanding", "Emotional impact"],
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Core Strengths</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <div key={index} className="feature-card text-center group hover:scale-105 transition-all duration-300">
              <div className={`p-4 bg-gradient-to-br ${strength.gradient} rounded-full w-fit mx-auto mb-4 group-hover:rotate-12 transition-transform`}>
                <strength.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{strength.title}</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {strength.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
