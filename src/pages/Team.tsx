import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Instagram, ArrowUpRight } from 'lucide-react';
import { TEAM } from '../data';
import { TeamMember } from '../types';
import { sounds } from '../utils/audio';

export default function Team() {
  return (
    <div className="text-white min-h-screen pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
      
      {/* Page Header */}
      <div className="flex flex-col gap-4">
        <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block">
          STUDIO ROSTER // OFFICERS
        </span>
        <h1 className="font-sans font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-white leading-none">
          THE DESIGN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">SOFTWARE SCIENTISTS.</span>
        </h1>
        <p className="font-mono text-zinc-400 text-xs tracking-wider uppercase max-w-xl leading-relaxed mt-2">
          An elite collective of mathematical designers, GLSL shader experts, and Web Audio synthesists operating symmetrically from Tokyo and Amsterdam.
        </p>
      </div>

      {/* Team Interactive Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {TEAM.map((member) => (
          <div
            key={member.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0f] transition-all hover:border-white/20 duration-500 cursor-none"
            data-cursor="pointer"
            onMouseEnter={() => sounds.playHover()}
          >
            {/* Grayscale portrait with hover chromatic reveal */}
            <div className="relative aspect-[4/5] overflow-hidden bg-black">
              <img
                src={member.image}
                alt={member.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-103 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              {/* Floating Favorite Tool */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 font-mono text-[8px] uppercase tracking-wider text-zinc-400 group-hover:text-purple-300 transition-colors">
                TOOL // {member.favoriteTool}
              </div>
            </div>

            {/* Speciation text block */}
            <div className="p-5 flex flex-col gap-4">
              <div>
                <h3 className="font-sans font-extrabold text-lg text-white uppercase tracking-tight group-hover:text-purple-400 transition-colors">
                  {member.name}
                </h3>
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mt-0.5">
                  {member.role}
                </span>
              </div>

              {/* Specialty details */}
              <div className="pt-3 border-t border-white/5 font-mono text-[9px] text-zinc-400 uppercase leading-relaxed">
                <span className="text-purple-400 block mb-1">SPECIALIZATION //</span>
                {member.specialty}
              </div>

              {/* Interactive Quote (hover reveal) */}
              <div className="h-0 group-hover:h-16 overflow-hidden transition-all duration-500 ease-in-out font-mono text-[8px] text-zinc-500 uppercase leading-normal">
                "{member.quote}"
              </div>

              {/* Social Channels coordinates */}
              <div className="flex gap-4 pt-3 border-t border-white/5 relative z-10">
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors cursor-none"
                    onClick={(e) => { e.stopPropagation(); sounds.playClick(); }}
                    onMouseEnter={() => sounds.playHover()}
                  >
                    <Twitter size={12} />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors cursor-none"
                    onClick={(e) => { e.stopPropagation(); sounds.playClick(); }}
                    onMouseEnter={() => sounds.playHover()}
                  >
                    <Linkedin size={12} />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors cursor-none"
                    onClick={(e) => { e.stopPropagation(); sounds.playClick(); }}
                    onMouseEnter={() => sounds.playHover()}
                  >
                    <Github size={12} />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors cursor-none"
                    onClick={(e) => { e.stopPropagation(); sounds.playClick(); }}
                    onMouseEnter={() => sounds.playHover()}
                  >
                    <Instagram size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
