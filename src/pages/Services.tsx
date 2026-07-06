import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Cpu, Volume2, ArrowRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES, FAQS } from '../data';
import { sounds } from '../utils/audio';

export default function Services() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    sounds.playClick();
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={18} className="text-purple-400" />;
      case 'Cpu': return <Cpu size={18} className="text-cyan-400" />;
      case 'Volume2': return <Volume2 size={18} className="text-pink-400" />;
      default: return <Sparkles size={18} className="text-purple-400" />;
    }
  };

  return (
    <div className="text-white min-h-screen pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
      
      {/* 1. Page Header */}
      <div className="flex flex-col gap-4">
        <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block">
          AGENCY CAPACITY // SPECIFICATIONS
        </span>
        <h1 className="font-sans font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-white leading-none">
          ENGINEERED BRANDS, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">IMMERSED AUDIENCES.</span>
        </h1>
        <p className="font-mono text-zinc-400 text-xs tracking-wider uppercase max-w-xl leading-relaxed mt-2">
          Breaking flat layout limits. We bridge high-concept brand identities with physical interaction matrices, custom WebGL nodes, and programmatically synthesized audio paths.
        </p>
      </div>

      {/* 2. Services Bento Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        {SERVICES.map((srv, idx) => (
          <div
            key={srv.id}
            className="p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Background gradient hint */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Icon + Step marker */}
            <div className="flex justify-between items-center relative z-10 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                {getIconComponent(srv.iconName)}
              </div>
              <span className="font-mono text-[12px]">CAPABILITY_0{idx+1}</span>
            </div>

            {/* Core details */}
            <div className="relative z-10">
              <h2 className="font-sans font-extrabold text-2xl uppercase tracking-tight text-white mb-3">
                {srv.title}
              </h2>
              <p className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase leading-relaxed mb-6">
                {srv.shortDesc}
              </p>
              
              <p className="font-mono text-[12px] text-zinc-200 uppercase mb-8">
                {srv.longDesc}
              </p>
            </div>

            {/* Lists mapping */}
            <div className="relative z-10 pt-6 border-t border-white/5 mt-auto">
              <span className="font-mono text-[12px] text-purple-400 tracking-widest uppercase block mb-3">
                DELIVERABLES:
              </span>
              <ul className="flex flex-col gap-2 font-mono text-[11px] text-zinc-400 uppercase">
                {srv.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase block mb-2">
                  TECHNOLOGIES:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {srv.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-[10px] text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/3 border border-white/5 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. FAQ Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
        {/* Left header column */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block">
            03 // GENERAL KNOWLEDGEBASE
          </span>
          <h2 className="font-sans font-extrabold text-3xl tracking-tight uppercase leading-none text-white">
            FREQUENT <br />INQUIRIES.
          </h2>
          <p className="font-mono text-[10px] text-zinc-500 uppercase leading-relaxed mt-2 max-w-sm">
            Technical answers from our active software architecture division. Reach out directly for project specific inquiries.
          </p>
        </div>

        {/* Accordions column */}
        <div className="lg:col-span-8 flex flex-col border-t border-white/5 select-none">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaq === idx;

            return (
              <div
                key={idx}
                className="border-b border-white/5 hover:bg-white/1 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center py-5 text-left font-sans font-extrabold text-base md:text-lg uppercase text-white tracking-tight cursor-none"
                  data-cursor="pointer"
                  onMouseEnter={() => sounds.playHover()}
                >
                  <span className={isOpen ? 'text-purple-400 transition-colors' : ''}>{faq.question}</span>
                  <div className="text-zinc-500 group-hover:text-white ml-4 shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 pt-1 pr-6 font-mono text-[10px] sm:text-xs text-zinc-400 uppercase leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
