import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Media from './components/Media';
import Internship from './components/Internship';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Strengths from './components/Strengths';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Media />
      <Internship />
      <Achievements />
      <Certificates />
      <Skills />
      <Strengths />
      <Footer />
    </div>
  );
}

export default App;
