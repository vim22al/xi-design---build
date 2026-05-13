'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import CinematicHeadline from '@/components/ui/CinematicHeadline';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with a deep dive into your vision, requirements, and the unique potential of your site.'
  },
  {
    number: '02',
    title: 'Concept Design',
    description: 'Our team develops initial sketches and 3D models to visualize the architectural direction.'
  },
  {
    number: '03',
    title: 'Planning Approval',
    description: 'We navigate the complexities of local planning authorities to secure necessary permissions.'
  },
  {
    number: '04',
    title: 'Technical Design',
    description: 'Detailed drawings and specifications are produced for building regulations and construction.'
  },
  {
    number: '05',
    title: 'Construction',
    description: 'Your vision comes to life through expert craftsmanship and dedicated project management.'
  }
];

// Consistent premium architectural easing curve
const customEase = [0.22, 1, 0.36, 1] as const;

interface TimelineStepProps {
  step: typeof steps[0];
  index: number;
}

function TimelineStep({ step, index }: TimelineStepProps) {
  const stepRef = useRef<HTMLDivElement>(null);
  
  // Entrance reveal trigger (fires once per step)
  const isEntering = useInView(stepRef, { once: true, amount: 0.4 });
  
  // Active stage highlight trigger (tracks whenever step enters/leaves view)
  const isActive = useInView(stepRef, { once: false, amount: 0.5 });

  // Mirrored horizontal displacement based on side
  const isEven = index % 2 === 0;
  const slideDirection = isEven ? -20 : 20;

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isEntering ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: customEase }}
      className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Content */}
      <div className="w-full md:w-1/2 px-4 md:px-12 text-center md:text-left">
        <div className={cn(
          "flex flex-col group",
          isEven ? "md:items-start" : "md:items-end md:text-right"
        )}>
          {/* STEP 3: Timeline numbers individually fade upward with burgundy reveal */}
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={isEntering ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.7, delay: 0.2, ease: customEase }}
            className="font-display text-4xl mb-4 text-[#5D1E21] transition-opacity duration-500 group-hover:opacity-100"
          >
            {step.number}
          </motion.span>

          {/* STEP 4: Title animates horizontally with elegant motion blur */}
          <motion.h3
            initial={{ opacity: 0, x: slideDirection, filter: 'blur(2px)' }}
            animate={isEntering ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: slideDirection, filter: 'blur(2px)' }}
            transition={{ duration: 0.8, delay: 0.4, ease: customEase }}
            className="text-xl font-display mb-4 text-dual-tone transition-colors duration-300 group-hover:text-warm-ivory"
          >
            {step.title}
          </motion.h3>

          {/* STEP 5: Description text softly fades in with delayed timing */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isEntering ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.8, delay: 0.65, ease: customEase }}
            className="text-sm text-warm-ivory/50 leading-relaxed max-w-sm transition-colors duration-500 group-hover:text-warm-ivory/80"
          >
            {step.description}
          </motion.p>
        </div>
      </div>

      {/* STEP 2: Numbered Circle sequentially animates in */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0, filter: 'blur(3px)' }}
        animate={isEntering ? { scale: 1, opacity: 1, filter: 'blur(0px)' } : { scale: 0.7, opacity: 0, filter: 'blur(3px)' }}
        transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
        style={{
          boxShadow: isActive 
            ? '0 0 0 1px rgba(166,130,74,0.4), 0 0 25px rgba(166,130,74,0.25)' 
            : '0 0 0 0px rgba(166,130,74,0)'
        }}
        className="absolute left-[20px] md:left-1/2 top-0 md:top-8 w-10 h-10 bg-rich-black border border-luxury-gold rounded-full flex items-center justify-center -translate-x-1/2 z-10 transition-all duration-700 group-hover:border-luxury-gold group-hover:shadow-[0_0_15px_rgba(166,130,74,0.3)]"
      >
        {/* Soft gold inner glow dot pulse */}
        <motion.div
          animate={{
            scale: isActive ? [1, 1.2, 1] : 1,
            opacity: isActive ? [0.8, 1, 0.8] : 0.8
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-2 h-2 bg-luxury-gold rounded-full"
        />
      </motion.div>

      {/* Empty Space for balanced layout */}
      <div className="w-full md:w-1/2 hidden md:block" />
    </motion.div>
  );
}

export default function ProcessSection() {
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  
  // STEP 1: Vertical center line softly reveals downward via scroll progress
  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ["start center", "end center"]
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="section-spacing bg-rich-black text-warm-ivory relative overflow-hidden">
      {/* Decorative Brand Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-[1px] bg-luxury-gold/20" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-luxury-gold/20" />
      <div className="absolute inset-0 grain-overlay opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 vignette opacity-30 pointer-events-none" />

      <div className="container-luxury">
        <div className="flex flex-col items-start mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block font-medium text-luxury-gold"
          >
            — Our Process
          </motion.span>

          <CinematicHeadline />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.7, ease: customEase }}
            className="max-w-2xl text-foreground/60 leading-relaxed font-light text-[13px] md:text-sm mt-8"
          >
            A structured, transparent approach that ensures your architectural project is delivered with excellence at every stage.
          </motion.p>
        </div>

        <div ref={timelineContainerRef} className="relative mt-20">
          {/* Animated Timeline Center Line */}
          <div className="absolute top-0 left-[20px] md:left-1/2 w-[1px] h-full -translate-x-1/2 hidden md:block z-0">
            {/* Ambient baseline track */}
            <div className="absolute inset-0 bg-luxury-gold/10" />
            
            {/* Scroll-revealed illuminated line */}
            <motion.div 
              style={{ 
                scaleY: lineScaleY,
                opacity: lineOpacity,
                transformOrigin: "top" 
              }}
              className="absolute inset-0 w-full bg-gradient-to-b from-luxury-gold/20 via-luxury-gold/80 to-luxury-gold/20 shadow-[0_0_8px_rgba(166,130,74,0.3)]"
            />
          </div>
          
          <div className="space-y-20 z-10 relative">
            {steps.map((step, index) => (
              <TimelineStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
