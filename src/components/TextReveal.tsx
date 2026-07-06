import React from 'react';
import { motion } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  mode?: 'words' | 'chars';
}

export default function TextReveal({ text, className = '', delay = 0, mode = 'words' }: TextRevealProps) {
  if (mode === 'chars') {
    const chars = text.split('');
    
    return (
      <span className={`inline-block ${className}`}>
        {chars.map((char, index) => (
          <span key={index} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: '100%', rotate: 5 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: delay + index * 0.02,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  // Word-by-word stagger (default)
  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block origin-left"
            initial={{ y: '100%', rotate: 2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + index * 0.04,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
