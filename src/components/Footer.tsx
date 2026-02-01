import { Mail, Phone, MapPin, Linkedin, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-purple-950 via-pink-950/50 to-blue-950 border-t border-pink-500/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Noureen Aslam
            </h3>
            <p className="text-gray-300 mb-4">
              Engineer + Creative Storyteller
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/noureenaslam" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/noureen-aslam" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
                <Github size={20} />
              </a>
              <a href="mailto:noureenaslam49@gmail.com" className="social-icon-footer">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a href="mailto:noureenaslam49@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors">
                <Mail size={18} className="text-pink-400" />
                <span>noureenaslam49@gmail.com</span>
              </a>
              <a href="tel:+919591449822" className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors">
                <Phone size={18} className="text-cyan-400" />
                <span>+91 9591449822</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} className="text-purple-400" />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-gray-300">
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-pink-400 transition-colors">
                About
              </button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-pink-400 transition-colors">
                Projects
              </button>
              <button onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-pink-400 transition-colors">
                Education
              </button>
              <button onClick={() => document.getElementById('media')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-pink-400 transition-colors">
                Media
              </button>
              <button onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-pink-400 transition-colors">
                Achievements
              </button>
              <button onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-pink-400 transition-colors">
                Certificates
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-500/30 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>Copyright © 2026 Noureen Aslam</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Designed with <Heart size={16} className="text-pink-400 inline" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
