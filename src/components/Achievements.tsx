import { Trophy, Award, Star, Download } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "1st Runner-Up - State-Level Hackathon",
      description: "Competed against 500+ teams and secured second place in prestigious state-level competition",
      year: "2025",
      gradient: "from-yellow-500 to-orange-600",
      file: "/images/Nammahackathon.png" // example file
    },
    {
      icon: Star,
      title: "Top Performer - AI & Robotics STTP",
      description: "IIITDM Kancheepuram - Recognized as top performer in Short Term Training Program",
      year: "2025",
      gradient: "from-pink-500 to-purple-600",
      file: "/images/STTP(BEST PERFORMER).png"
    },
    {
      icon: Award,
      title: "Top 85 / 1000 Teams - Odoo x CGC Hackathon",
      description: "National level hackathon recognition competing among 1000+ teams",
      year: "2025",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Star,
      title: "Volunteer - Under25 Summit",
      description: "Tech & Media Coordination at premier youth leadership summit",
      year: "2024",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Trophy,
      title: "Namma Hackathon Achievement",
      description: "Outstanding performance in Bangalore's premier student hackathon",
      year: "2024",
      gradient: "from-blue-500 to-cyan-600",
      file: "/images/Nammahackathon.png"
    }
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-purple-950 via-pink-950/50 to-blue-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Achievements</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="feature-card group hover:scale-105 transition-all duration-300"
            >
              <div
                className={`p-4 bg-gradient-to-br ${achievement.gradient} rounded-xl w-fit mb-4 group-hover:rotate-6 transition-transform`}
              >
                <achievement.icon className="text-white" size={28} />
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  {achievement.description}
                </p>
                <span className="inline-block px-3 py-1 bg-purple-900/50 text-cyan-300 rounded-full text-xs font-semibold">
                  {achievement.year}
                </span>
              </div>

              {/* ✅ Only show certificate if file exists */}
              {achievement.file && (
                <div className="mt-3">
                  <img
                    src={achievement.file}
                    alt={`${achievement.title} Certificate`}
                    className="w-full rounded-lg shadow-lg border border-pink-500/30 mb-2"
                  />
                  <a
                    href={achievement.file}
                    download
                    className="flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    <Download size={16} />
                    Download Certificate
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}