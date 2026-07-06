import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Grid, Filter, Search } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { sounds } from '../utils/audio';

interface ProjectsProps {
  setCurrentPage: (page: string) => void;
  setSelectedProjectId: (id: string) => void;
}

export default function Projects({ setCurrentPage, setSelectedProjectId }: ProjectsProps) {
  const [filter, setFilter] = useState<string>('ALL');
  const [search, setSearch] = useState<string>('');

  // Extract all unique categories to make dynamic filters
  const categories = useMemo(() => {
    const list = new Set<string>();
    PROJECTS.forEach(p => {
      // Split spatial tags or use categories
      if (p.category.includes('Spatial')) list.add('SPATIAL');
      else if (p.category.includes('WebGL') || p.category.includes('Generative')) list.add('WEBGL');
      else if (p.category.includes('Audio') || p.category.includes('Sound')) list.add('AUDIO');
      else list.add('BRANDING');
    });
    return ['ALL', ...Array.from(list)];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.category.toLowerCase().includes(search.toLowerCase()) ||
                          p.description.toLowerCase().includes(search.toLowerCase());
      
      if (filter === 'ALL') return matchSearch;
      if (filter === 'SPATIAL') return p.category.toLowerCase().includes('spatial') && matchSearch;
      if (filter === 'WEBGL') return (p.category.toLowerCase().includes('branding') || p.category.toLowerCase().includes('generative')) && matchSearch;
      if (filter === 'AUDIO') return p.category.toLowerCase().includes('audio') && matchSearch;
      return p.category.toLowerCase().includes(filter.toLowerCase()) && matchSearch;
    });
  }, [filter, search]);

  const handleProjectClick = (projectId: string) => {
    sounds.playClick();
    setSelectedProjectId(projectId);
    setCurrentPage('case-studies');
  };

  return (
    <div className="text-white min-h-screen pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Page Header */}
      <div className="flex flex-col gap-4">
        <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block">
          PORTFOLIO ARCHIVE // CODES
        </span>
        <h1 className="font-sans font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-white leading-none">
          CREATIVE COMMISSION <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">INDEX RELEASES.</span>
        </h1>
        <p className="font-mono text-zinc-400 text-xs tracking-wider uppercase max-w-xl leading-relaxed mt-2">
          An interactive registry of digital worlds engineered with mathematical grid structures, high-rate simulation nodes, and bespoke acoustic direction.
        </p>
      </div>

      {/* Navigation Filter Controls & Search bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-6 mt-4">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sounds.playClick();
                setFilter(cat);
              }}
              className={`px-4 py-1.5 font-mono text-[9px] uppercase tracking-widest rounded-full transition-all border cursor-none ${
                filter === cat
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/50 font-bold'
                  : 'bg-transparent text-zinc-400 border-white/5 hover:border-white/20'
              }`}
              data-cursor="pointer"
              onMouseEnter={() => sounds.playHover()}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input Box */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="FILTER REGISTRY..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 pl-9 rounded-full bg-white/2 border border-white/5 hover:border-white/10 focus:border-purple-500/50 focus:outline-none font-mono text-[10px] text-white tracking-widest uppercase placeholder-zinc-600 transition-all cursor-none"
            data-cursor="pointer"
          />
          <Search size={12} className="absolute left-3.5 top-3 text-zinc-500" />
        </div>
      </div>

      {/* Mosaic Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            // Creative Asymmetric offsetting: make every even card offset slightly lower on desktops
            const isEven = idx % 2 === 1;
            
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className={`group cursor-none flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0f] transition-all hover:border-white/20 duration-500 ${
                  isEven ? 'md:mt-12' : ''
                }`}
                data-cursor="view"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Image frame */}
                <div className="relative aspect-[16/11] overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-103 group-hover:opacity-100 transition-all duration-700"
                  />
                  
                  {/* Subtle colorful gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-90" />
                  
                  {/* Year tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/5 font-mono text-[9px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span>{project.year}</span>
                  </div>

                  <span className="absolute bottom-4 right-4 font-mono text-[9px] text-zinc-500 tracking-wider">
                    RE_0{idx+1}
                  </span>
                </div>

                {/* Details card */}
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase">
                      {project.category}
                    </span>
                    <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="font-sans font-extrabold text-2xl tracking-tight text-white uppercase leading-none">
                    {project.title}
                  </h3>

                  <p className="font-mono text-[10px] text-zinc-400 uppercase leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Core tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-mono text-[8px] tracking-wider uppercase text-zinc-500 px-2.5 py-1 rounded-full border border-white/5 bg-white/2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="col-span-1 md:col-span-2 py-20 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500" />
            </div>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              No matching digital commissions detected in registry.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
