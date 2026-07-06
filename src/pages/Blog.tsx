import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, X, ArrowLeft, ArrowUpRight, Share2 } from 'lucide-react';
import { BLOGS } from '../data';
import { BlogArticle } from '../types';
import { sounds } from '../utils/audio';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [isShared, setIsShared] = useState(false);

  const handleOpenArticle = (art: BlogArticle) => {
    sounds.playClick();
    setSelectedArticle(art);
    setIsShared(false);
  };

  const handleCloseArticle = () => {
    sounds.playClick();
    setSelectedArticle(null);
  };

  const handleShare = () => {
    sounds.playClick();
    setIsShared(true);
    setTimeout(() => setIsShared(false), 2000);
  };

  return (
    <div className="text-white min-h-screen pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Page Header */}
      <div className="flex flex-col gap-4">
        <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block">
          EDITORIAL JOURNAL // INTELLECT
        </span>
        <h1 className="font-sans font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-white leading-none">
          THE AETHER <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">RESEARCH JOURNAL.</span>
        </h1>
        <p className="font-mono text-zinc-400 text-xs tracking-wider uppercase max-w-xl leading-relaxed mt-2">
          Theoretical essays, performance formulas, and sensory system updates compiled directly by our active software laboratory.
        </p>
      </div>

      {/* Articles Grid layout */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {BLOGS.map((art) => (
          <div
            key={art.id}
            onClick={() => handleOpenArticle(art)}
            className="group cursor-none flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/20 transition-all duration-500"
            data-cursor="read"
            onMouseEnter={() => sounds.playHover()}
          >
            {/* Image frame */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <img
                src={art.image}
                alt={art.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-103 group-hover:opacity-100 transition-all duration-700"
              />
              <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 font-mono text-[8px] uppercase tracking-widest text-purple-300">
                {art.category}
              </span>
            </div>

            {/* Speciation text details */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                  <Calendar size={10} />
                  <span>{art.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={10} />
                  <span>{art.readTime}</span>
                </div>
              </div>

              <h3 className="font-sans font-extrabold text-xl tracking-tight text-white uppercase leading-none group-hover:text-purple-400 transition-colors">
                {art.title}
              </h3>

              <p className="font-mono text-[10px] text-zinc-400 uppercase leading-relaxed line-clamp-3">
                {art.excerpt}
              </p>

              {/* Author row */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-2">
                <img
                  src={art.author.avatar}
                  alt={art.author.name}
                  referrerPolicy="no-referrer"
                  className="w-6 h-6 rounded-full object-cover border border-white/10"
                />
                <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">
                  WRITTEN BY {art.author.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Cinematic Full screen Glass Reader Panel */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#050508]/96 backdrop-blur-2xl flex justify-end overflow-y-auto select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close touch trigger backdrop */}
            <div className="absolute inset-0 -z-10" onClick={handleCloseArticle} />

            {/* Sliding Panel */}
            <motion.div
              className="w-full max-w-3xl bg-black/40 border-l border-white/5 min-h-screen p-6 sm:p-12 md:p-16 flex flex-col gap-8 relative overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              {/* Reading linear header bar */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 to-cyan-500" />

              {/* Controls block */}
              <div className="flex justify-between items-center border-b border-white/5 pb-6">
                <button
                  onClick={handleCloseArticle}
                  className="group font-mono text-[9px] uppercase tracking-widest text-zinc-500 hover:text-white flex items-center gap-2 transition-all cursor-none"
                  data-cursor="pointer"
                  onMouseEnter={() => sounds.playHover()}
                >
                  <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                  [ Back to Journal ]
                </button>

                <div className="flex gap-4">
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full border border-white/10 hover:border-white/30 bg-white/2 hover:bg-white/5 transition-all text-zinc-400 hover:text-white relative cursor-none"
                    data-cursor="pointer"
                    onMouseEnter={() => sounds.playHover()}
                  >
                    <Share2 size={12} />
                    <AnimatePresence>
                      {isShared && (
                        <motion.span
                          className="absolute -bottom-8 right-0 bg-purple-500 text-white font-mono text-[8px] uppercase tracking-widest px-2 py-1 rounded border border-purple-400"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          Copied!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>

                  <button
                    onClick={handleCloseArticle}
                    className="p-2 rounded-full border border-white/10 hover:border-white/30 bg-white/2 hover:bg-white/5 transition-all text-zinc-400 hover:text-white cursor-none"
                    data-cursor="pointer"
                    onMouseEnter={() => sounds.playHover()}
                  >
                    <X size={12} />
                  </button>
                </div>
              </div>

              {/* Category, Date & Title */}
              <div className="flex flex-col gap-3 mt-4">
                <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block">
                  JOURNAL ARCHIVE // {selectedArticle.category}
                </span>
                <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tighter uppercase text-white leading-tight">
                  {selectedArticle.title}
                </h2>
                
                <div className="flex gap-6 font-mono text-[9px] text-zinc-500 uppercase tracking-widest mt-2 pb-6 border-b border-white/5">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={10} />
                    {selectedArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={10} />
                    {selectedArticle.readTime}
                  </span>
                </div>
              </div>

              {/* Giant Graphic Header */}
              <div className="aspect-[21/9] rounded-xl overflow-hidden border border-white/5">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-65"
                />
              </div>

              {/* Article content (markdown/text style) */}
              <div className="font-mono text-zinc-300 text-xs sm:text-sm uppercase leading-relaxed tracking-wide flex flex-col gap-6 pt-2 pb-12 select-text">
                {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <img
                  src={selectedArticle.author.avatar}
                  alt={selectedArticle.author.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <span className="font-sans font-bold text-xs uppercase text-white block">
                    {selectedArticle.author.name}
                  </span>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">
                    RESEARCH BOARD ARCHITECT
                  </span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
