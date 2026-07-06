import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Cpu, Star, Quote, Code, Compass, ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES, PROJECTS } from '../data';
import { sounds } from '../utils/audio';

interface CaseStudiesProps {
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
  setCurrentPage: (page: string) => void;
}

export default function CaseStudies({ selectedProjectId, setSelectedProjectId, setCurrentPage }: CaseStudiesProps) {
  // Gracefully fallback to the first project in our list if none was explicitly selected
  const activeId = selectedProjectId || PROJECTS[0].id;
  const caseStudy = useMemo(() => {
    return CASE_STUDIES[activeId] || CASE_STUDIES['lumina-spatial'];
  }, [activeId]);

  const handleBack = () => {
    sounds.playClick();
    setSelectedProjectId(null);
    setCurrentPage('projects');
  };

  const handleNextProject = () => {
    sounds.playClick();
    // Find next project index
    const currIdx = PROJECTS.findIndex(p => p.id === activeId);
    const nextIdx = (currIdx + 1) % PROJECTS.length;
    setSelectedProjectId(PROJECTS[nextIdx].id);
  };

  return (
    <div className="text-white min-h-screen pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
      {/* Navigation and Title */}
      <div className="flex flex-col gap-6">
        <button
          onClick={handleBack}
          className="group font-mono text-[9px] uppercase tracking-widest text-zinc-500 hover:text-white flex items-center gap-2 transition-all cursor-none max-w-fit"
          data-cursor="pointer"
          onMouseEnter={() => sounds.playHover()}
        >
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          [ Return to Index ]
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div>
            <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block mb-2">
              DEEP CASE STUDY // {caseStudy.project.category}
            </span>
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase leading-none">
              {caseStudy.project.title}
            </h1>
          </div>
          <div className="font-mono text-right text-[10px] text-zinc-500">
            <p>CLIENT: {caseStudy.project.client}</p>
            <p>LAUNCH_CYCLE: {caseStudy.project.year}</p>
          </div>
        </div>
      </div>

      {/* Massive Hero Image */}
      <section className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-white/5">
        <img
          src={caseStudy.project.image}
          alt={caseStudy.project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-xl">
          <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block mb-2">
            MISSION STATEMENT
          </span>
          <p className="font-sans font-semibold text-base sm:text-lg leading-relaxed text-zinc-100">
            "{caseStudy.project.description}"
          </p>
        </div>
      </section>

      {/* Statistics Row (Bento Style) */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {caseStudy.metrics.map((metric, i) => (
          <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-md flex flex-col justify-between min-h-[140px]">
            <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
              METRIC_0{i+1}
            </span>
            <span className="font-mono font-black text-3xl sm:text-4xl text-purple-400 my-2 tracking-tighter">
              {metric.value}
            </span>
            <span className="font-sans font-bold text-[10px] text-zinc-300 uppercase tracking-wider">
              {metric.label}
            </span>
          </div>
        ))}
      </section>

      {/* Challenge vs Solution */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4 p-8 rounded-2xl border border-white/5 bg-black/30 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-2">
            <Compass size={14} className="text-red-400" />
            <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase">THE CRITICAL CHALLENGE</span>
          </div>
          <h2 className="font-sans font-extrabold text-xl uppercase tracking-tight text-white">THE STRATEGIC BLOCK</h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-400 uppercase leading-relaxed mt-2">{caseStudy.challenge}</p>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4 p-8 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-2">
            <Code size={14} className="text-purple-400" />
            <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase">THE TECHNICAL SOLUTION</span>
          </div>
          <h2 className="font-sans font-extrabold text-xl uppercase tracking-tight text-white">ENGINEERED MATRIX</h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-400 uppercase leading-relaxed mt-2">{caseStudy.solution}</p>
        </div>
      </section>

      {/* Step by Step Development Process */}
      <section className="flex flex-col gap-8">
        <div>
          <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block mb-2">
            METHODOLOGY // WORKFLOW
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase text-white">
            THE CHOREOGRAPHY STEPS
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/5">
          {caseStudy.process.map((p, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-6 border-b border-white/5 items-start">
              <div className="lg:col-span-2 font-mono text-xl font-black text-purple-500/50">
                {p.step}
              </div>
              <div className="lg:col-span-3 font-sans font-extrabold text-base uppercase text-white tracking-wide pt-1">
                {p.title}
              </div>
              <div className="lg:col-span-7 font-mono text-xs text-zinc-400 uppercase leading-relaxed pt-1">
                {p.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Results Bullet points */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8">
        <div className="lg:col-span-5">
          <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block mb-2">
            03 // DATA OUTCOMES
          </span>
          <h2 className="font-sans font-extrabold text-3xl tracking-tight uppercase text-white leading-none">
            VERIFIED <br />CONCRETE <br />RESULTS.
          </h2>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-4 font-mono text-xs sm:text-sm text-zinc-300 uppercase">
          {caseStudy.results.map((res, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-black/20">
              <Star size={14} className="text-yellow-400 mt-1 shrink-0" />
              <span>{res}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Endorsement block */}
      <section className="p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/2 to-purple-500/2 backdrop-blur-xl relative">
        <Quote size={28} className="text-purple-500/20 absolute top-6 right-6" />
        <div className="flex flex-col gap-4 max-w-4xl">
          <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase">CLIENT ENDORSEMENT</span>
          <p className="font-sans font-medium text-base sm:text-lg italic text-zinc-200 leading-relaxed">
            "{caseStudy.quote.text}"
          </p>
          <div className="pt-4 border-t border-white/5 mt-2">
            <span className="font-sans font-bold text-xs uppercase text-white block">{caseStudy.quote.author}</span>
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">{caseStudy.quote.role}</span>
          </div>
        </div>
      </section>

      {/* Next Case Study Navigation */}
      <section className="flex justify-between items-center py-8 border-t border-white/5 mt-4">
        <button
          onClick={handleBack}
          className="font-mono text-[10px] text-zinc-500 hover:text-white cursor-none transition-colors"
          data-cursor="pointer"
        >
          [ RETURN ]
        </button>
        <button
          onClick={handleNextProject}
          className="group font-sans font-extrabold text-base uppercase tracking-wider text-purple-400 hover:text-white cursor-none flex items-center gap-3 transition-colors"
          data-cursor="pointer"
          onMouseEnter={() => sounds.playHover()}
        >
          Next Case Study
          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </section>
    </div>
  );
}
