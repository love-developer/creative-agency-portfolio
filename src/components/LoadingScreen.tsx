import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { sounds } from '../utils/audio';

const LOADER_WORDS = [
  'SPATIAL DESIGN',
  'GLSL SHADERS',
  'WEBGL PHYSICS',
  'SENSORY UX',
  'AVANT-GARDE',
  'AETHER STUDIO'
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast simulated tick up
    const startTime = Date.now();
    const duration = 2400; // 2.4 seconds loading time

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const computedProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      
      setProgress(computedProgress);

      // Cycle words based on progress percentage
      const nextWordIdx = Math.min(
        Math.floor((computedProgress / 100) * LOADER_WORDS.length),
        LOADER_WORDS.length - 1
      );
      setWordIndex(nextWordIdx);

      if (computedProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          // Play a nice atmospheric enter sound
          sounds.playSuccess();
          setTimeout(onComplete, 800); // Allow exit slide animation to complete
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-9999 flex flex-col justify-between bg-[#050508] p-8 md:p-16 select-none"
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          {/* Top Info row */}
          <div className="flex justify-between items-center font-mono text-[10px] tracking-widest text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
              <span>AETHER_SYSTEM_BOOTING</span>
            </div>
            <span>[ ©2026 CODES_RUNNING ]</span>
          </div>

          {/* Central Word cycle + styling */}
          <div className="my-auto flex flex-col items-start max-w-4xl">
            <span className="font-mono text-zinc-600 text-xs tracking-widest mb-2">CONCEPT CORE //</span>
            <div className="overflow-hidden h-[4rem] sm:h-[6rem] md:h-[8rem] flex items-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={wordIndex}
                  className="font-sans font-extrabold text-4xl sm:text-6xl md:text-8xl tracking-tighter text-white leading-none uppercase"
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  {LOADER_WORDS[wordIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom progress metrics */}
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
            <div className="font-mono text-[10px] text-zinc-600 max-w-sm">
              <p>MAPPED HARDWARE: CORE_ACCELERATED_WEBGL</p>
              <p>AUDIO CORE: PROGRAMMATIC_SYNTHESIZER_ACTIVE</p>
            </div>
            
            {/* Massive percentage display */}
            <div className="flex items-baseline gap-2 font-mono text-white">
              <span className="text-zinc-600 text-xs">INIT_</span>
              <span className="text-6xl sm:text-8xl font-black tabular-nums leading-none">
                {progress.toString().padStart(3, '0')}
              </span>
              <span className="text-purple-500 font-bold text-xl">%</span>
            </div>
          </div>

          {/* Bottom line loader indicator */}
          <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 transition-all duration-300" style={{ width: `${progress}%` }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
