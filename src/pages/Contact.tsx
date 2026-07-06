import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, Globe, Shield } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Contact() {
  const [department, setDepartment] = useState('GENERAL COMMISSION');
  const [budget, setBudget] = useState('$50K - $100K');
  const [timeline, setTimeline] = useState('3-6 MONTHS');
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name) tempErrors.name = 'NAME PROTOCOL REQUIRED';
    if (!formData.email || !formData.email.includes('@')) tempErrors.email = 'VALID EMAIL PROTOCOL REQUIRED';
    if (!formData.message) tempErrors.message = 'DETAILED MESSAGE SYSTEM REQUIRED';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      sounds.playSuccess();
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', company: '', email: '', message: '' });
      }, 5000);
    } else {
      sounds.playClick();
    }
  };

  return (
    <div className="text-white min-h-screen pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
      
      {/* Page Header */}
      <div className="flex flex-col gap-4">
        <span className="font-mono text-[11px] text-purple-400 tracking-widest uppercase block">
          SECURE CHANNEL // CONTACT
        </span>
        <h1 className="font-sans font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-white leading-none">
          INITIATE SECURE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">COLLABORATION NODES.</span>
        </h1>
        <p className="font-mono text-zinc-400 text-xs tracking-wider uppercase max-w-xl leading-relaxed mt-2">
          Establish secure transmission lines. Our active software design engineers process core proposals within 12 standard consensus solar hours.
        </p>
      </div>

      {/* Main Two Column Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4 items-start">
        {/* Left column: Contact Form */}
        <div className="lg:col-span-8 p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-md relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSent ? (
              <form onSubmit={handleSend} className="flex flex-col gap-6 relative z-10">
                
                {/* 1. Choose Department */}
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[11px] text-purple-400 uppercase tracking-widest">
                    01 // TRANSMISSION DEPARTMENT PATHWAY
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['GENERAL COMMISSION', 'SPEAKING/TALKS', 'PRESS RELATIONS'].map((dep) => (
                      <button
                        key={dep}
                        type="button"
                        onClick={() => {
                          sounds.playClick();
                          setDepartment(dep);
                        }}
                        className={`px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest rounded-full border transition-all cursor-none ${
                          department === dep
                            ? 'bg-purple-500/20 text-purple-300 border-purple-500/50 font-bold'
                            : 'bg-transparent text-zinc-400 border-white/5 hover:border-white/20'
                        }`}
                        data-cursor="pointer"
                        onMouseEnter={() => sounds.playHover()}
                      >
                        {dep}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Project Budget range */}
                <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                  <span className="font-mono text-[11px] text-purple-400 uppercase tracking-widest">
                    02 // FISCAL RESOURCE COORDINATES (BUDGET)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['$20K - $50K', '$50K - $100K', '$100K+'].map((bud) => (
                      <button
                        key={bud}
                        type="button"
                        onClick={() => {
                          sounds.playClick();
                          setBudget(bud);
                        }}
                        className={`px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest rounded-full border transition-all cursor-none ${
                          budget === bud
                            ? 'bg-purple-500/20 text-purple-300 border-purple-500/50 font-bold'
                            : 'bg-transparent text-zinc-400 border-white/5 hover:border-white/20'
                        }`}
                        data-cursor="pointer"
                        onMouseEnter={() => sounds.playHover()}
                      >
                        {bud}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Project timeline */}
                <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                  <span className="font-mono text-[11px] text-purple-400 uppercase tracking-widest">
                    03 // TIMELINE CYCLE COORDINATES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['IMMEDIATE', '3-6 MONTHS', 'FLEXIBLE'].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          sounds.playClick();
                          setTimeline(time);
                        }}
                        className={`px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest rounded-full border transition-all cursor-none ${
                          timeline === time
                            ? 'bg-purple-500/20 text-purple-300 border-purple-500/50 font-bold'
                            : 'bg-transparent text-zinc-400 border-white/5 hover:border-white/20'
                        }`}
                        data-cursor="pointer"
                        onMouseEnter={() => sounds.playHover()}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Contact text fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">SECURE NAME PROTOCOL</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="E.G. SILAS VANCE"
                      className="px-4 py-2.5 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 focus:border-purple-500/50 focus:outline-none font-mono text-[10px] tracking-wider text-white uppercase cursor-none"
                      data-cursor="pointer"
                    />
                    {errors.name && <span className="font-mono text-[10px] text-red-400 uppercase">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">ORGANIZATION / COMPANY</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="E.G. LUMINA INC."
                      className="px-4 py-2.5 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 focus:border-purple-500/50 focus:outline-none font-mono text-[10px] tracking-wider text-white uppercase cursor-none"
                      data-cursor="pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">EMAIL COMMUNICATION PATHWAY</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.G. SILAS@AETHER.COM"
                    className="px-4 py-2.5 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 focus:border-purple-500/50 focus:outline-none font-mono text-[10px] tracking-wider text-white uppercase cursor-none"
                    data-cursor="pointer"
                  />
                  {errors.email && <span className="font-mono text-[10px] text-red-400 uppercase">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">PROJECT INTEL TRANSMISSION</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="PROVIDE SECURE CONNOTATIONS FOR THE COLLABORATION..."
                    className="px-4 py-2.5 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 focus:border-purple-500/50 focus:outline-none font-mono text-[10px] tracking-wider text-white uppercase resize-none cursor-none"
                    data-cursor="pointer"
                  />
                  {errors.message && <span className="font-mono text-[10px] text-red-400 uppercase">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="mt-4 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-purple-500/10 hover:scale-101 transition-all cursor-none flex items-center justify-center gap-3"
                  data-cursor="pointer"
                  onMouseEnter={() => sounds.playHover()}
                >
                  Establish Link
                  <Send size={12} />
                </button>

              </form>
            ) : (
              <motion.div
                key="success"
                className="py-16 flex flex-col items-center justify-center text-center gap-4 relative z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 animate-bounce">
                  <CheckCircle size={28} />
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-xl text-white uppercase tracking-tight">
                    TRANSMISSION SECURED.
                  </h3>
                  <p className="font-mono text-[10px] text-zinc-400 uppercase mt-2 leading-relaxed max-w-sm mx-auto">
                    Your packet has been successfully sent through department pathways to {department}. Your budget coordinates are locked at {budget}.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Right column: Info & coordinates */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Coordinates Tokyo */}
          <div className="p-6 rounded-2xl border border-white/5 bg-black/20 backdrop-blur-md">
            <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest block mb-1">
              COORDINATE_A // ASIA PACIFIC
            </span>
            <h4 className="font-sans font-extrabold text-base text-white uppercase">
              TOKYO STUDIO
            </h4>
            <div className="font-mono text-[10px] text-zinc-400 uppercase leading-relaxed mt-3 flex flex-col gap-2">
              <span className="flex items-start gap-2">
                <MapPin size={11} className="text-zinc-600 mt-0.5" />
                <span>SHIBUYA 2-CHOME, TOKYO, JP</span>
              </span>
              <span className="flex items-center gap-2">
                <Mail size={11} className="text-zinc-600" />
                <span>TOKYO@AETHERSTUDIO.IO</span>
              </span>
            </div>
          </div>

          {/* Coordinates Amsterdam */}
          <div className="p-6 rounded-2xl border border-white/5 bg-black/20 backdrop-blur-md">
            <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest block mb-1">
              COORDINATE_B // EU REGISTRY
            </span>
            <h4 className="font-sans font-extrabold text-base text-white uppercase">
              AMSTERDAM STUDIO
            </h4>
            <div className="font-mono text-[10px] text-zinc-400 uppercase leading-relaxed mt-3 flex flex-col gap-2">
              <span className="flex items-start gap-2">
                <MapPin size={11} className="text-zinc-600 mt-0.5" />
                <span>KEIZERSGRACHT, AMSTERDAM, NL</span>
              </span>
              <span className="flex items-center gap-2">
                <Mail size={11} className="text-zinc-600" />
                <span>AMSTERDAM@AETHERSTUDIO.IO</span>
              </span>
            </div>
          </div>

          {/* Secure encryption tag info */}
          <div className="p-6 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-md flex items-center gap-4">
            <div className="p-2.5 rounded-full bg-purple-500/10 text-purple-400">
              <Shield size={16} />
            </div>
            <div>
              <span className="font-sans font-bold text-xs uppercase text-white block">
                TLS SECURE CHANNELS
              </span>
              <p className="font-mono text-[11px] text-zinc-500 uppercase mt-0.5">
                All transmissions encrypted on client boundaries
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
