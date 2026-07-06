import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { sounds } from '../utils/audio';

const PAGES_META = [
  { id: 'home', label: 'HOME', number: '01', desc: 'Agency Core & Showcase', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80' },
  { id: 'projects', label: 'PROJECTS', number: '02', desc: 'Bespoke Portfolios', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&q=80' },
  { id: 'case-studies', label: 'CASE STUDIES', number: '03', desc: 'Deep Dive Proofs', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80' },
  { id: 'services', label: 'SERVICES', number: '04', desc: 'Bento Grid Capacities', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80' },
  { id: 'about', label: 'ABOUT', number: '05', desc: 'Philosophy & Manifesto', image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=400&q=80' },
  { id: 'team', label: 'TEAM', number: '06', desc: 'Our Design Scientists', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
  { id: 'blog', label: 'BLOG', number: '07', desc: 'Editorial & Innovations', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80' },
  { id: 'careers', label: 'CAREERS', number: '08', desc: 'Sagas & Open Ranks', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80' },
  { id: 'contact', label: 'CONTACT', number: '09', desc: 'Secure Collaborations', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80' },
];

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleLinkClick = (pageId: string) => {
    sounds.playClick();
    setCurrentPage(pageId);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    sounds.playClick();
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Permanent Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-transparent py-6 px-6 md:px-12 flex justify-between items-center select-none">
        {/* Futuristic Brand Logo */}
        <div 
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2 cursor-none"
          data-cursor="pointer"
          onMouseEnter={() => sounds.playHover()}
        >
          <span className="font-mono text-xs font-black tracking-[0.4em] text-white">AETHER</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
        </div>

        {/* Desktop Quick Shortcuts */}
        <nav className="hidden md:flex items-center gap-10">
          {['projects', 'services', 'about', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => handleLinkClick(section)}
              className={`relative font-mono font-bold text-[12px] uppercase tracking-[0.5px] transition-all cursor-none ${
                currentPage === section ? 'text-purple-400 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
              data-cursor="pointer"
              onMouseEnter={() => sounds.playHover()}
            >
              {section}
              {currentPage === section && (
                <motion.span
                  layoutId="activeTabUnderline"
                  className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-purple-500"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Menu Toggle Trigger */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 bg-black/10 hover:bg-white/5 backdrop-blur-md transition-all text-white cursor-none"
            data-cursor="pointer"
            onMouseEnter={() => sounds.playHover()}
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] hidden sm:inline">
              {isOpen ? 'Close' : 'Menu'}
            </span>
            <div className="relative w-4 h-4 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close-icon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={14} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu-icon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={14} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
      </header>

      {/* Cinematic Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-[#050508]/98 backdrop-blur-xl flex flex-col justify-between p-8 md:p-16 overflow-y-auto select-none"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Top row buffer (allows scroll spacing below absolute header) */}
            <div className="h-16" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 my-auto items-center">
              {/* Left Column: Huge typographic navigation */}
              <nav className="flex flex-col gap-1 sm:gap-2 lg:col-span-7">
                {PAGES_META.map((page, idx) => (
                  <motion.div
                    key={page.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.2, duration: 0.5, ease: 'easeOut' }}
                    className="group flex items-center gap-4 sm:gap-8 cursor-none"
                    onMouseEnter={() => {
                      sounds.playHover();
                      setHoveredIndex(idx);
                    }}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleLinkClick(page.id)}
                  >
                    <span className="font-mono text-[10px] sm:text-xs text-zinc-600 group-hover:text-purple-400 transition-colors">
                      {page.number} //
                    </span>
                    <button
                      className="text-left font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tighter text-zinc-400 group-hover:text-white transition-all duration-300 relative uppercase"
                      data-cursor="pointer"
                    >
                      <span className="relative z-10">{page.label}</span>
                      <motion.span 
                        className="absolute bottom-1 left-0 w-0 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" 
                      />
                    </button>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0 hidden md:inline-block">
                      — {page.desc}
                    </span>
                  </motion.div>
                ))}
              </nav>

              {/* Right Column: Immersive visual projection panel */}
              <div className="hidden lg:flex lg:col-span-5 h-[380px] relative items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-white/2 backdrop-blur-md">
                <AnimatePresence mode="wait">
                  {hoveredIndex !== null ? (
                    <motion.div
                      key={hoveredIndex}
                      className="absolute inset-0 w-full h-full p-4 flex flex-col justify-end"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={PAGES_META[hoveredIndex].image}
                        alt="Preview"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="relative z-10 p-4">
                        <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase">
                          PREVIEW // {PAGES_META[hoveredIndex].number}
                        </span>
                        <h4 className="text-xl font-bold font-sans text-white mt-1">
                          {PAGES_META[hoveredIndex].label}
                        </h4>
                        <p className="font-mono text-[10px] text-zinc-400 mt-1 uppercase tracking-wider">
                          {PAGES_META[hoveredIndex].desc}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      className="flex flex-col items-center justify-center text-center p-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                      </div>
                      <h4 className="font-mono text-xs uppercase text-zinc-400 tracking-[0.2em]">AETHER DIGITAL GATEWAY</h4>
                      <p className="font-mono text-[10px] text-zinc-600 mt-2 max-w-xs uppercase leading-relaxed">
                        Hover links to map visual nodes in spatial memory
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom info row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-12 border-t border-white/5 mt-12 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
              <div>
                <span>STUDIO: TOKYO // AMSTERDAM // REMOTE</span>
              </div>
              <div>
                <span>AWARDS ACQUIRED: 18+ AWWWARDS & FWA</span>
              </div>
              <div className="flex gap-4">
                <a href="#instagram" className="hover:text-white transition-colors cursor-none" data-cursor="pointer">INSTAGRAM</a>
                <a href="#twitter" className="hover:text-white transition-colors cursor-none" data-cursor="pointer">TWITTER</a>
                <a href="#github" className="hover:text-white transition-colors cursor-none" data-cursor="pointer">GITHUB</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
