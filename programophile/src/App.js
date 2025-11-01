import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import InteractiveBackground from './components/Background/InteractiveBackground';
import Hero from './components/Hero/Hero';
import ProjectsSection from './components/Projects/ProjectsSection';
import SkillsSection from './components/Skills/SkillsSection';
import ContactForm from './components/Contact/ContactForm';
import { useScrollProgress } from './hooks/useScrollProgress';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Dark Mode Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-6 right-6 z-50 p-3 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-full text-2xl hover:border-neon-blue/50 transition-colors duration-300"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </motion.button>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="flex gap-2 bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700"
        >
          {['Home', 'Projects', 'Skills', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-neon-blue/20 transition-all duration-300"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        
        <div id="projects">
          <ProjectsSection />
        </div>
        
        <div id="skills">
          <SkillsSection />
        </div>
        
        <div id="contact">
          <ContactForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 text-center border-t border-slate-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex justify-center gap-6 mb-4">
            {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
              >
                {platform}
              </motion.a>
            ))}
          </div>
          
          <motion.p
            className="text-gray-500 text-sm"
            whileHover={{ scale: 1.02 }}
          >
            © 2024 Your Name. Built with React, Framer Motion & TailwindCSS
          </motion.p>
        </motion.div>
      </footer>

      {/* Scroll to Top Button */}
      {scrollProgress > 20 && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full shadow-lg shadow-neon-blue/50 text-white"
        >
          ↑
        </motion.button>
      )}
    </div>
  );
}

export default App;

// import './App.css';

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
//           Hello World!
//         </h1>
//         <p className="text-white text-xl">
//           🚀 Your portfolio is loading...
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;