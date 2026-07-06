import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

// Reusable Components
import CustomCursor from './components/CustomCursor';
import InteractiveBackground from './components/InteractiveBackground';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import SoundToggle from './components/SoundToggle';

// Modular Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import CaseStudies from './pages/CaseStudies';
import Services from './pages/Services';
import About from './pages/About';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setSelectedProjectId={setSelectedProjectId}
          />
        );
      case 'projects':
        return (
          <Projects
            setCurrentPage={setCurrentPage}
            setSelectedProjectId={setSelectedProjectId}
          />
        );
      case 'case-studies':
        return (
          <CaseStudies
            selectedProjectId={selectedProjectId}
            setSelectedProjectId={setSelectedProjectId}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'team':
        return <Team />;
      case 'blog':
        return <Blog />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setSelectedProjectId={setSelectedProjectId}
          />
        );
    }
  };

  return (
    <>
      {/* 1. Cinematic Loading Screen on First Boot */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {/* Hide layout until loaded to allow clean entry animations */}
      {!loading && (
        <div className="relative min-h-screen bg-[#050508] text-white selection:bg-purple-500/30 selection:text-white antialiased">
          
          {/* 2. Interactive Fluid Canvas Backdrop */}
          <InteractiveBackground />

          {/* 3. Ultra-responsive Micro-Cursor System */}
          <CustomCursor />

          {/* 4. Elegant Persistent Headers & Overlay Menu */}
          <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

          {/* 5. Smooth Routing transitions */}
          <main className="relative z-10 w-full min-h-screen pb-12 overflow-x-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: 0.6,
                  ease: [0.76, 0, 0.24, 1], // Cubic-bezier from Awwwards favorites
                }}
                className="w-full"
              >
                {renderActivePage()}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* 6. Sound Toggle Control Unit */}
          <SoundToggle />

          {/* Minimal Editorial Footer */}
          <footer className="relative z-10 w-full border-t border-white/5 py-8 px-6 md:px-12 bg-black/20 backdrop-blur-sm select-none">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[12px] uppercase tracking-widest">
              <div>
                <span>AETHER STUDIO ©2026</span>
              </div>
              <div className="flex gap-4">
                <span>TERMS_OF_SERVICE</span>
                <span>•</span>
                <span>SECURITY_PROTOCOL_v4.5</span>
              </div>
              <div>
                <span>COORDS: 35.6762° N, 139.6503° E</span>
              </div>
            </div>
          </footer>

        </div>
      )}
    </>
  );
}
