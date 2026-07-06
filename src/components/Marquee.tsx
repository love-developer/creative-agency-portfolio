import React from 'react';
import { motion } from 'motion/react';

interface MarqueeProps {
  items: string[];
  speed?: number; // lower means faster
  reverse?: boolean;
}

export default function Marquee({ items, speed = 20, reverse = false }: MarqueeProps) {
  // Duplicate items to ensure smooth wrap around
  const listItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 flex select-none pointer-events-none">
      <motion.div
        className="flex whitespace-nowrap gap-16 pr-16 text-xs font-mono font-bold uppercase tracking-[0.3em] text-zinc-500/50"
        animate={{
          x: reverse ? ['-33.33%', '0%'] : ['0%', '-33.33%']
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
      >
        {listItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
