import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function SoundToggle() {
  const [isMuted, setIsMuted] = useState(sounds.getMuteStatus());

  const handleToggle = () => {
    const nextMuteState = sounds.toggleMute();
    setIsMuted(nextMuteState);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 backdrop-blur-md text-white transition-all cursor-none"
      data-cursor="pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isMuted ? 'Unmute Experience' : 'Mute Experience'}
    >
      {/* Wave bars visualizer (only moves when unmuted) */}
      <div className="flex items-center gap-[2px] h-3 w-4">
        {[1, 2, 3, 4].map((bar) => (
          <span
            key={bar}
            className={`w-[2px] bg-purple-400 rounded-full transition-all duration-300 ${
              isMuted ? 'h-[2px]' : 'h-full animate-pulse'
            }`}
            style={{
              animationDelay: `${bar * 120}ms`,
              animationDuration: '600ms',
            }}
          />
        ))}
      </div>

      <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-300">
        {isMuted ? 'Sound Off' : 'Sound On'}
      </span>

      <div className="text-zinc-400 hover:text-white">
        {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
      </div>
    </motion.button>
  );
}
