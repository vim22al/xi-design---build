'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

const customEase = [0.22, 1, 0.36, 1] as const;

interface StatItem {
  end: number;
  suffix: string;
  label: string;
  duration: number;
}

const stats: StatItem[] = [
  { end: 15, suffix: '+', label: 'Years Experience', duration: 2.2 },
  { end: 550, suffix: '+', label: 'Completed Projects', duration: 2.8 },
  { end: 51, suffix: '', label: 'Expert Team', duration: 2.0 },
];

function AnimatedStatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isCounting, setIsCounting] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: customEase }}
      className="relative flex flex-col items-center p-6"
    >
      {/* Number container with dynamic glowing pulse during count */}
      <motion.div 
        className="relative mb-4 flex items-center justify-center"
        animate={{
          textShadow: isCounting 
            ? ['0px 0px 0px rgba(166,130,74,0)', '0px 0px 25px rgba(166,130,74,0.4)', '0px 0px 5px rgba(166,130,74,0.1)']
            : '0px 0px 0px rgba(166,130,74,0)'
        }}
        transition={{ duration: 1.5, repeat: isCounting ? Infinity : 0, ease: "easeInOut" }}
      >
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-display text-luxury-gold tracking-tight flex items-center justify-center min-w-[3ch]">
          <CountUp
            start={0}
            end={isInView ? stat.end : 0}
            duration={stat.duration}
            useEasing={true}
            onStart={() => setIsCounting(true)}
            onEnd={() => {
              setIsCounting(false);
              setHasFinished(true);
            }}
          />
          {/* Plus suffix revealed after counting completes */}
          {stat.suffix && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: hasFinished ? 1 : 0, scale: hasFinished ? 1 : 0.5 }}
              transition={{ duration: 0.4, ease: customEase }}
              className="text-luxury-gold inline-block origin-left -ml-0.5"
            >
              {stat.suffix}
            </motion.span>
          )}
        </h3>
      </motion.div>

      {/* Label revealed cleanly after stat processing */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.4 : 0 }}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: customEase }}
        className="text-[11px] uppercase tracking-[0.25em] text-white font-medium text-center mt-1"
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
}

export default function AnimatedStats() {
  return (
    <section className="section-spacing bg-rich-black text-white overflow-hidden">
      <div className="container-luxury">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Rebalanced 3-column centralized grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-center justify-center">
            {stats.map((stat, index) => (
              <AnimatedStatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
