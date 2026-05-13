'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CinematicHeadlineProps {
  className?: string;
}

export default function CinematicHeadline({ className }: CinematicHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Custom cubic-bezier for premium architectural easing
  const customEase = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const line1Variants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(2px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: customEase },
    },
  };

  const line2Variants = {
    hidden: { opacity: 0, y: 28, filter: 'blur(4px)', scale: 1.02 },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: { duration: 1.1, ease: customEase },
    },
  };

  const line3Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: customEase },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1.0, delay: 0.5, ease: customEase },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.6,
      transition: { duration: 1.4, delay: 0.6, ease: customEase },
    },
  };

  return (
    <div ref={containerRef} className={cn('relative py-4', className)}>
      {/* Subtle background glow enhancement behind headline */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] md:w-[500px] h-[150px] bg-luxury-gold/10 blur-[64px] rounded-full pointer-events-none z-0"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 flex flex-col font-display text-3xl md:text-5xl lg:text-6xl tracking-tight"
      >
        {/* Line 1 */}
        <motion.div
          variants={line1Variants}
          className="text-warm-ivory/90 font-light leading-[1.15] md:leading-[1.1] lg:leading-[1.05]"
        >
          The Journey from
        </motion.div>

        {/* Line 2: Blueprint */}
        <motion.div
          variants={line2Variants}
          className="text-[#5D1E21] italic font-normal leading-[1.15] md:leading-[1.1] lg:leading-[1.05]"
        >
          Blueprint
        </motion.div>

        {/* Line 3: to Reality */}
        <motion.div
          variants={line3Variants}
          className="leading-[1.15] md:leading-[1.1] lg:leading-[1.05]"
        >
          <span className="text-warm-ivory/90 font-light">to </span>
          <span className="text-dual-tone font-medium relative text-shadow-[0_0_20px_rgba(166,130,74,0.25)]">
            Reality
          </span>
        </motion.div>

        {/* Animated Gold Underline */}
        <div className="mt-6 md:mt-8">
          <motion.div
            variants={underlineVariants}
            className="h-[1.5px] w-[80px] md:w-[120px] lg:w-[160px] bg-luxury-gold origin-left"
          />
        </div>
      </motion.div>
    </div>
  );
}
