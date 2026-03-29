import { ArrowRight, Download, User } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center border-4 border-white/20 shadow-2xl">
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center border-4 border-white/20 shadow-2xl overflow-hidden">
  <img
    src="images/noureen.jpg"
    alt="Noureen Aslam"
    className="w-full h-full object-cover rounded-full"
  />
</div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
          Noureen Aslam
        </h1>

        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Engineer + Creative Storyteller
        </p>

        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
          Blending AI/ML research, full-stack development, IoT systems, and creative video editing & design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-bold text-lg text-white shadow-lg shadow-pink-500/50 hover:shadow-pink-500/75 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button
  onClick={() => {
    const link = document.createElement("a");
    link.href = "images/Noureen_Aslam_Resume.pdf";
    link.download = "Noureen_Aslam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-bold text-lg text-white shadow-lg shadow-pink-500/50 hover:shadow-pink-500/75 hover:scale-105 transition-all duration-300 flex items-center gap-2"
>
  Download Resume
  <Download className="group-hover:translate-y-1 transition-transform" size={20} />
</button>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="stat-card">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">3+</div>
            <div className="text-gray-300 text-sm">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">10+</div>
            <div className="text-gray-300 text-sm">Projects</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">5+</div>
            <div className="text-gray-300 text-sm">Achievements</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">6+</div>
            <div className="text-gray-300 text-sm">Certificates</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
