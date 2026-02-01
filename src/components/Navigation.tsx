import { Menu, X, Mail, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/95 via-pink-900/95 to-blue-900/95 backdrop-blur-lg border-b border-pink-500/30 shadow-lg shadow-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Noureen Aslam
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('education')} className="nav-link">Education</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('media')} className="nav-link">Media</button>
            <button onClick={() => scrollToSection('achievements')} className="nav-link">Achievements</button>
            <button onClick={() => scrollToSection('certificates')} className="nav-link">Certificates</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/noureenaslam" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/noureen-aslam" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="mailto:noureenaslam49@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-pink-300 hover:text-pink-100">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-purple-950/98 backdrop-blur-lg border-t border-pink-500/30">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
            <button onClick={() => scrollToSection('education')} className="mobile-nav-link">Education</button>
            <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">Projects</button>
            <button onClick={() => scrollToSection('media')} className="mobile-nav-link">Media</button>
            <button onClick={() => scrollToSection('achievements')} className="mobile-nav-link">Achievements</button>
            <button onClick={() => scrollToSection('certificates')} className="mobile-nav-link">Certificates</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
            <div className="flex space-x-4 pt-3 border-t border-pink-500/30 mt-3">
              <a href="https://www.linkedin.com/in/noureenaslam" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/noureen-aslam" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={20} />
              </a>
              <a href="mailto:noureenaslam49@gmail.com" className="social-icon">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
