import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Compass, Briefcase, MapPin, X, Send, CheckCircle } from 'lucide-react';
import { CAREERS } from '../data';
import { CareerPosition } from '../types';
import { sounds } from '../utils/audio';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<CareerPosition | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', portfolio: '', coverText: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleOpenForm = (job: CareerPosition) => {
    sounds.playClick();
    setSelectedJob(job);
    setIsSubmitted(false);
    setFormData({ name: '', email: '', portfolio: '', coverText: '' });
    setErrors({});
  };

  const handleCloseForm = () => {
    sounds.playClick();
    setSelectedJob(null);
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name) tempErrors.name = 'NAME COORDINATES REQUIRED';
    if (!formData.email || !formData.email.includes('@')) tempErrors.email = 'VALID EMAIL COORDINATES REQUIRED';
    if (!formData.portfolio) tempErrors.portfolio = 'PORTFOLIO NODE REQUIRED';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      sounds.playSuccess();
      setIsSubmitted(true);
      setTimeout(() => {
        setSelectedJob(null);
      }, 3000);
    } else {
      sounds.playClick();
    }
  };

  return (
    <div className="text-white min-h-screen pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
      
      {/* Page Header */}
      <div className="flex flex-col gap-4">
        <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block">
          CREATIVE ENLISTMENT // SAGAS
        </span>
        <h1 className="font-sans font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-white leading-none">
          JOIN OUR DESIGN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">ENGINEERING RANKS.</span>
        </h1>
        <p className="font-mono text-zinc-400 text-xs tracking-wider uppercase max-w-xl leading-relaxed mt-2">
          We are constantly searching for math-minded visual designers, GLSL wizards, and Web Audio synthesists who want to shred standard browser boundaries.
        </p>
      </div>

      {/* Benefits grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {[
          { title: 'HYBRID SPATIAL FREEDOM', desc: 'Work from Tokyo studio, Amsterdam studio, or secure remote coordinates.' },
          { title: 'CUSTOM SILICON MATRICES', desc: 'Get outfitted with high-rate liquid cooling setups and dual high-Hz displays.' },
          { title: 'CREATIVE SOVEREIGNTY', desc: 'We dedicate 20% of engineering timelines purely to custom physics and shader experiments.' }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-md flex flex-col gap-4">
            <span className="font-mono text-[9px] text-purple-400">BENEFIT_0{i+1}</span>
            <h3 className="font-sans font-extrabold text-base uppercase text-white tracking-wide">{item.title}</h3>
            <p className="font-mono text-[10px] text-zinc-400 uppercase leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Career Roles Registry */}
      <section className="flex flex-col gap-8 mt-4">
        <div>
          <span className="font-mono text-[9px] text-purple-400 tracking-widest uppercase block mb-2">
            01 // OPEN RANKS REGISTRY
          </span>
          <h2 className="font-sans font-extrabold text-2xl tracking-tight uppercase text-white">
            ACTIVE RECRUITMENT NODES
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/5">
          {CAREERS.map((job) => (
            <div
              key={job.id}
              className="py-8 border-b border-white/5 hover:bg-white/1 transition-all duration-300 px-4 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center group"
            >
              <div className="flex flex-col gap-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Briefcase size={10} />
                    {job.department}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={10} />
                    {job.location}
                  </span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded-full border border-white/5 bg-white/2 text-purple-400">
                    {job.type}
                  </span>
                </div>

                <h3 className="font-sans font-extrabold text-xl sm:text-2xl tracking-tight text-white uppercase mt-1 group-hover:text-purple-400 transition-colors">
                  {job.title}
                </h3>

                <p className="font-mono text-[10px] text-zinc-400 uppercase leading-relaxed mt-1">
                  {job.description}
                </p>

                {/* Requirements bullets */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <span className="font-mono text-[8px] text-purple-400 tracking-wider uppercase block mb-1.5">
                    REQUIREMENTS:
                  </span>
                  <ul className="flex flex-col gap-1 font-mono text-[9px] text-zinc-500 uppercase">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-zinc-600" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => handleOpenForm(job)}
                className="px-6 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-widest cursor-none whitespace-nowrap self-start md:self-center transition-all"
                data-cursor="pointer"
                onMouseEnter={() => sounds.playHover()}
              >
                APPLY NOW //
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Glass interactive Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#0a0a0f]/90 p-8 flex flex-col gap-6 relative shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 250, damping: 25 }}
            >
              {/* Corner Close button */}
              <button
                onClick={handleCloseForm}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors cursor-none p-1 border border-white/5 rounded-full"
                data-cursor="pointer"
              >
                <X size={14} />
              </button>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[8px] text-purple-400 uppercase tracking-widest block">
                      SECURE APPLICATION GATEWAY //
                    </span>
                    <h3 className="font-sans font-extrabold text-lg text-white uppercase">
                      ROLE: {selectedJob.title}
                    </h3>
                  </div>

                  {/* Name field */}
                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">FULL NAME COORDINATES</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="E.G. SILAS VANCE"
                      className="px-4 py-2.5 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 focus:border-purple-500/50 focus:outline-none font-mono text-[10px] tracking-wider text-white uppercase cursor-none"
                      data-cursor="pointer"
                    />
                    {errors.name && <span className="font-mono text-[8px] text-red-400 uppercase">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">EMAIL SECURE COORDINATES</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="E.G. SILAS@AETHER.COM"
                      className="px-4 py-2.5 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 focus:border-purple-500/50 focus:outline-none font-mono text-[10px] tracking-wider text-white uppercase cursor-none"
                      data-cursor="pointer"
                    />
                    {errors.email && <span className="font-mono text-[8px] text-red-400 uppercase">{errors.email}</span>}
                  </div>

                  {/* Portfolio link field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">PORTFOLIO PROTOCOL (URL)</label>
                    <input
                      type="url"
                      required
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="HTTPS://GITHUB.COM/SILAS"
                      className="px-4 py-2.5 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 focus:border-purple-500/50 focus:outline-none font-mono text-[10px] tracking-wider text-white cursor-none"
                      data-cursor="pointer"
                    />
                    {errors.portfolio && <span className="font-mono text-[8px] text-red-400 uppercase">{errors.portfolio}</span>}
                  </div>

                  {/* Cover text area */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">SYSTEM INTRODUCTION (COVER)</label>
                    <textarea
                      rows={3}
                      value={formData.coverText}
                      onChange={(e) => setFormData({ ...formData, coverText: e.target.value })}
                      placeholder="DESCRIBE YOUR GLSL / SENSORY EXPERIENCE..."
                      className="px-4 py-2.5 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 focus:border-purple-500/50 focus:outline-none font-mono text-[10px] tracking-wider text-white uppercase resize-none cursor-none"
                      data-cursor="pointer"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-[0.2em] hover:scale-101 transition-all cursor-none flex items-center justify-center gap-3"
                    data-cursor="pointer"
                    onMouseEnter={() => sounds.playHover()}
                  >
                    Submit Coordinates
                    <Send size={12} />
                  </button>
                </form>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 animate-bounce">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-lg text-white uppercase tracking-tight">
                      COORDINATES SECURED.
                    </h3>
                    <p className="font-mono text-[10px] text-zinc-400 uppercase mt-2 leading-relaxed max-w-sm mx-auto">
                      Your application protocol has been safely locked in the Aether core database. A recruiter will establish contact soon.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
