import React from 'react';
import { motion } from 'motion/react';
import { Compass, Eye, ShieldAlert, Zap } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function About() {
  const VALUES = [
    { title: 'PRECISE MATHEMATICS', desc: 'We do not eye-ball layouts. Every coordinate transition is bound by physical spring math and custom bezier vectors.', icon: Zap },
    { title: 'SENSORY IMMERSION', desc: 'No mute platforms. We balance pixels with programmatically generated synthetic chimes, bringing physical acoustics to digital spaces.', icon: Compass },
    { title: 'RADICAL SIMPLICITY', desc: 'We peel away the noise. High contrast brutalism paired with massive typography ensures users focus exactly on the central actions.', icon: Eye }
  ];

  const TIMELINE = [
    { year: '2026', title: 'TOKYO METAVERSE STUDIO', desc: 'Opened our second coordinate office in Tokyo focusing purely on Spatial UI, WebXR interactive panels, and raw shaders.' },
    { year: '2025', yearLabel: 'AWWWARDS NOMINATION', title: 'GLOBAL CREATIVE ASCENT', desc: 'Awarded over 8 Awwwards Site of the Day ribbons, establishing Aether as an elite boutique frontend force.' },
    { year: '2024', title: 'THE SENSORY LAB BOOT', desc: 'Invented our custom Web Audio API sound synthesizer engine, releasing interfaces from static silence.' }
  ];

  return (
    <div className="text-white min-h-screen pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
      {/* 1. Page Header */}
      <div className="flex flex-col gap-4">
        <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block">
          ABOUT CODES // ARCHITECTURE
        </span>
        <h1 className="font-sans font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-white leading-none">
          CREATIVE SOFTWARE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">DESIGN SCIENTISTS.</span>
        </h1>
        <p className="font-mono text-zinc-400 text-xs tracking-wider uppercase max-w-xl leading-relaxed mt-2">
          Aether is a boutique digital agency combining advanced frontend engineering with artistic spatial layouts, creating high-dwell internet artifacts.
        </p>
      </div>

      {/* 2. Story / Philosophy Columns */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4">
        <div className="lg:col-span-5">
          <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block mb-3">
            01 // CORE PHILOSOPHY
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase leading-tight text-white">
            WE DO NOT COMPROMISE ON INTERACTION SPEED.
          </h2>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 font-mono text-xs sm:text-sm text-zinc-400 uppercase leading-relaxed">
          <p>
            The world wide web is saturated with uniform templates. Users swipe past millions of identical layout blocks, leading to extreme visual numbness. We combat this by implementing deep interactive choreography.
          </p>
          <p>
            By marrying raw mathematics (spring physics, fluid vector fields, bezier eases) with custom audio waveforms, we satisfy the fundamental human desire for sensory confirmation. Our clients are bold, forward-thinking corporations who seek to establish irreversible benchmarks in their sectors.
          </p>
        </div>
      </section>

      {/* 3. Value Bento blocks */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {VALUES.map((val, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-md flex flex-col gap-6 hover:border-white/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400">
              <val.icon size={16} />
            </div>
            <div>
              <h3 className="font-sans font-extrabold text-lg uppercase text-white tracking-wide">
                {val.title}
              </h3>
              <p className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase leading-relaxed tracking-wide mt-2">
                {val.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 4. Timeline Registry */}
      <section className="flex flex-col gap-8">
        <div>
          <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block mb-2">
            02 // CHRONOS REGISTRY
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase text-white">
            HISTORIC MILESTONES
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/5">
          {TIMELINE.map((time, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-white/5 items-start hover:bg-white/1 transition-all duration-300 px-4 group"
            >
              <div className="md:col-span-2 font-mono text-xl font-black text-purple-500/80">
                {time.year}
              </div>
              <div className="md:col-span-3 font-sans font-extrabold text-base uppercase text-white tracking-wide pt-1">
                {time.title}
              </div>
              <div className="md:col-span-7 font-mono text-[11px] sm:text-xs text-zinc-400 uppercase leading-relaxed pt-1">
                {time.desc}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
