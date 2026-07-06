import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Cpu, Sparkles, Volume2, Globe, Shield, Calendar, ArrowRight } from 'lucide-react';
import { PROJECTS, AWARDS, SERVICES } from '../data';
import { sounds } from '../utils/audio';
import TextReveal from '../components/TextReveal';
import Marquee from '../components/Marquee';

interface HomeProps {
  setCurrentPage: (page: string) => void;
  setSelectedProjectId: (id: string) => void;
}

export default function Home({ setCurrentPage, setSelectedProjectId }: HomeProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Aether didn't just redesign our website. They built a virtual world that communicates our spatial vision with absolute, breathtaking cinematic fidelity. The mathematical grid structure combined with programmatically synthesized audio creates an unforgettably premium experience.",
      author: "Marcus Vance",
      role: "VP of Product, Lumina Inc.",
      meta: "LUMINA SPATIAL // GOLD WEBBY"
    },
    {
      quote: "The visual fluency of their GLSL simulations and raw performance speed is incredible. They are design scientists, executing at a level that completely redefines the boundaries of modern creative frontend engineering.",
      author: "Elena Rostova",
      role: "Chief Architect, Chronos Labs",
      meta: "CHRONOS PROTOCOL // FWA OF THE YEAR"
    }
  ];

  const handleProjectClick = (projectId: string) => {
    sounds.playClick();
    setSelectedProjectId(projectId);
    setCurrentPage('case-studies');
  };

  const handleNavigate = (page: string) => {
    sounds.playClick();
    setCurrentPage(page);
  };

  return (
    <div className="text-white min-h-screen pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-24 md:gap-36">
      
      {/* 1. HUGE HERO BANNER */}
      <section className="flex flex-col justify-center min-h-[75vh] relative select-none">
        {/* Architectural grid code tag */}
        <div className="font-mono text-[9px] tracking-[0.3em] text-zinc-500 mb-6 flex items-center gap-3">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
          <span>ESTABLISHED // TOKYO // AMSTERDAM // 2026</span>
        </div>

        {/* Massive Headline */}
        <h1 className="font-sans font-extrabold text-4xl sm:text-7xl md:text-8xl tracking-tighter leading-[0.9] uppercase max-w-5xl">
          <TextReveal text="WE CRAFT" delay={0.1} /> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
            <TextReveal text="ATMOSPHERIC" delay={0.3} />
          </span> <br />
          <TextReveal text="INTERACTIONS." delay={0.5} />
        </h1>

        <p className="font-mono text-zinc-400 text-xs sm:text-sm tracking-wide mt-8 max-w-xl leading-relaxed uppercase">
          An Awwwards-winning creative studio engineering raw physical mathematics, custom GLSL shaders, and Web Audio synths into elite web experiences.
        </p>

        {/* Hero Interactive Widgets / Floating Cards */}
        <div className="mt-12 flex flex-wrap gap-4 sm:gap-6">
          <button
            onClick={() => handleNavigate('projects')}
            className="group px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-zinc-200 transition-all cursor-none"
            data-cursor="pointer"
            onMouseEnter={() => sounds.playHover()}
          >
            Explore Portfolios
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => handleNavigate('contact')}
            className="px-6 py-3.5 rounded-full border border-white/10 bg-white/2 hover:border-white/30 hover:bg-white/5 backdrop-blur-md font-semibold text-xs uppercase tracking-widest flex items-center gap-2 transition-all cursor-none"
            data-cursor="pointer"
            onMouseEnter={() => sounds.playHover()}
          >
            Start Project
          </button>
        </div>
      </section>

      {/* 2. ENDLESS MARQUEE */}
      <section className="-mx-6 md:-mx-12 overflow-hidden border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <Marquee 
          items={[
            "SITE OF THE YEAR nominee",
            "FWA PLATINUM DESIGN",
            "GLSL LIQUID CORE",
            "SENSORY WEB AUDIO",
            "ATMOSPHERIC REVEALS"
          ]} 
          speed={25}
        />
      </section>

      {/* 3. CORE PHILOSOPHY / MISSION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4">
          <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block mb-4">
            01 // OUR MANIFESTO
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight uppercase leading-none text-white">
            DESIGN IS <br />DIGITAL PHYSICS.
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-6 font-mono text-xs sm:text-sm text-zinc-400 uppercase leading-relaxed max-w-2xl">
          <p>
            Standard flat layouts are cold. We believe web interfaces should behave like physical systems. Elements should have mass, momentum, friction, and fluid refractions. 
          </p>
          <p>
            By mapping native hardware vectors directly to customized CSS coordinate matrices and low-level shaders, we construct premium spatial portals that completely shatter standard grid limits. We don't build sites. We create sensory gateways.
          </p>
        </div>
      </section>

      {/* 4. STATISTICS GRID (Bento Style) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { metric: '98%', label: 'PERFORMANCE SCORE', desc: 'Sustained 60fps states on complex WebGL renders' },
          { metric: '18+', label: 'CREATIVE LAURELS', desc: 'Prestige ribbons across Awwwards & CSSDA' },
          { metric: '1.2ms', label: 'MATRIX LATENCY', desc: 'Engineered vertex shading computation times' },
          { metric: '12', label: 'SENIOR SCIENTISTS', desc: 'Design engineers crafting globally from Tokyo & Amsterdam' }
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-md flex flex-col justify-between min-h-[180px] hover:border-white/20 transition-all group"
            whileHover={{ y: -5 }}
          >
            <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase flex justify-between items-center">
              <span>METRIC_0{i+1}</span>
              <Cpu size={12} className="text-purple-400 group-hover:rotate-45 transition-transform" />
            </div>
            <div className="my-4">
              <span className="font-mono font-black text-4xl sm:text-5xl text-white block tracking-tighter">
                {stat.metric}
              </span>
            </div>
            <div>
              <span className="font-sans font-bold text-xs uppercase text-zinc-200 block tracking-wider">
                {stat.label}
              </span>
              <p className="font-mono text-[9px] text-zinc-500 mt-1 uppercase leading-normal">
                {stat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 5. PORTFOLIO SHOWCASE */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block mb-2">
              02 // RECENT COMMISSION RELEASES
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tighter uppercase text-white">
              SENSORY ARTIFACTS
            </h2>
          </div>
          <button
            onClick={() => handleNavigate('projects')}
            className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white flex items-center gap-2 transition-all cursor-none"
            data-cursor="pointer"
            onMouseEnter={() => sounds.playHover()}
          >
            VIEW ALL RELEASES [→]
          </button>
        </div>

        {/* Interactive Dynamic Grid of Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {PROJECTS.filter(p => p.featured).map((project, idx) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group cursor-none flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0f] transition-all hover:border-white/20 duration-500"
              data-cursor="view"
              onMouseEnter={() => sounds.playHover()}
            >
              {/* Image with subtle hover scale/saturation */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-102 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Year tag floating */}
                <span className="absolute top-4 right-4 px-3 py-1 font-mono text-[9px] bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                  {project.year}
                </span>
              </div>

              {/* Text specifications */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[9px] text-purple-400 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <h3 className="font-sans font-extrabold text-2xl tracking-tight uppercase text-white leading-none">
                  {project.title}
                </h3>
                
                <p className="font-mono text-[10px] text-zinc-400 uppercase leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="font-mono text-[8px] tracking-wider uppercase text-zinc-500 px-2.5 py-1 rounded-full border border-white/5 bg-white/2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. DESIGN PROCESS STEPS */}
      <section className="flex flex-col gap-12">
        <div>
          <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block mb-2">
            03 // HOW WE OPERATE
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tighter uppercase text-white">
            THE PRODUCTION LOOP
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Atmospheric Physics', desc: 'We map raw user focus. We define layout grids and physical weights, calculating how buttons react to rapid acceleration and swipe vectors.', icon: Cpu },
            { step: '02', title: 'Sonic Sculpting', desc: 'Our sensory lab designs bespoke sound feedback (ticks, sweeps, and mechanical chimes) mapping sound waves to coordinate transitions.', icon: Volume2 },
            { step: '03', title: 'WebGL Synthesis', desc: 'We deploy customized fragment GLSL shaders directly inside canvas, creating volumetric smoke, refractions, and liquid orbs that lock users in deep attention.', icon: Sparkles }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-md flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <span className="font-mono font-black text-4xl text-purple-500/50">{item.step}</span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-purple-400">
                  <item.icon size={16} />
                </div>
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-lg uppercase text-white tracking-wide">{item.title}</h3>
                <p className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wide leading-relaxed mt-3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PRESTIGIOUS AWARDS RECORD */}
      <section className="flex flex-col gap-8">
        <div>
          <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block mb-2">
            04 // INTERNATIONAL VERIFIED LAURELS
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tighter uppercase text-white leading-none">
            AWARDS RECORD
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/5">
          {AWARDS.map((award, idx) => (
            <div
              key={award.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-5 border-b border-white/5 items-center hover:bg-white/2 transition-colors duration-300 px-4 group select-none"
            >
              <div className="md:col-span-2 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                {award.year} // 0{idx+1}
              </div>
              <div className="md:col-span-3 font-sans font-extrabold text-lg uppercase text-white tracking-tight group-hover:text-purple-400 transition-colors">
                {award.title}
              </div>
              <div className="md:col-span-3 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                {award.category}
              </div>
              <div className="md:col-span-2 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                {award.project}
              </div>
              <div className="md:col-span-2 flex justify-start md:justify-end">
                <span className="px-3 py-1 font-mono text-[9px] font-bold bg-white/5 border border-white/10 text-zinc-300 rounded-full group-hover:border-purple-500/50 group-hover:text-white transition-colors uppercase tracking-widest">
                  {award.platform}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. INTERACTIVE TESTIMONIALS SLIDER */}
      <section className="p-8 md:p-12 rounded-3xl border border-white/5 bg-gradient-to-br from-white/2 to-purple-500/2 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between gap-8 min-h-[340px]">
        <div className="font-mono text-[9px] text-purple-400 tracking-widest uppercase">
          05 // SECURE REVIEWS
        </div>

        <div className="my-auto max-w-4xl">
          <p className="font-sans font-medium text-lg sm:text-xl md:text-2xl tracking-wide text-zinc-200 italic leading-relaxed">
            "{testimonials[activeTestimonial].quote}"
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-6 border-t border-white/5">
          <div>
            <span className="font-sans font-extrabold text-sm uppercase text-white block">
              {testimonials[activeTestimonial].author}
            </span>
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">
              {testimonials[activeTestimonial].role} — <span className="text-purple-400">{testimonials[activeTestimonial].meta}</span>
            </span>
          </div>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  sounds.playClick();
                  setActiveTestimonial(i);
                }}
                className={`w-10 py-1.5 font-mono text-[9px] font-bold rounded-full transition-all cursor-none border ${
                  activeTestimonial === i 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-white border-white/10 hover:border-white/30'
                }`}
                data-cursor="pointer"
                onMouseEnter={() => sounds.playHover()}
              >
                0{i+1}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DEEP IMPACT TYPOGRAPHIC CTA */}
      <section className="text-center py-12 md:py-20 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-md relative overflow-hidden select-none">
        {/* Subtle grid elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 -z-10" />
        
        <span className="font-mono text-[10px] text-purple-400 tracking-widest uppercase block mb-6">
          — START A CONVERSATION
        </span>
        
        <h2 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tighter uppercase text-white leading-none">
          LET'S BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
            THE FUTURE.
          </span>
        </h2>

        <p className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase max-w-md mx-auto leading-relaxed mt-6 tracking-wide px-4">
          Establish secure contact coordinates. Our software design engineers respond within 12 standard consensus solar hours.
        </p>

        <div className="mt-8">
          <button
            onClick={() => handleNavigate('contact')}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-purple-500/20 hover:scale-105 transition-all cursor-none inline-flex items-center gap-3"
            data-cursor="pointer"
            onMouseEnter={() => {
              sounds.playHover();
            }}
          >
            Initiate Project
            <ArrowUpRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}
