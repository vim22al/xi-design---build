'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-rich-black">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-rich-black/70 via-rich-black/40 to-transparent z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-with-large-windows-and-greenery-42750-large.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* Brand Glow Blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-luxury-gold/5 blur-3xl rounded-full pointer-events-none z-1" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-luxury-gold/5 blur-3xl rounded-full pointer-events-none z-1" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none z-1" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[5] opacity-[0.15] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--luxury-gold)_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="absolute inset-0 z-[6] bg-[radial-gradient(circle_at_bottom_right,_var(--luxury-gold)_0%,_transparent_50%)] opacity-10 pointer-events-none" />

      <div className="container-luxury relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-luxury-gold" />
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-[10px] md:text-xs font-medium">
              Established Excellence
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display leading-[1.1] mb-10 text-balance text-dual-tone"
          >
            Luxury Architecture <br />
            <span className="italic font-light">& Design</span> That Defines <br />
            Modern Living
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-xl text-warm-ivory/70 text-sm md:text-base font-light leading-relaxed mb-12"
          >
            XI Design & Build creates refined residential and commercial spaces through bespoke architecture, planning expertise, and exceptional design thinking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            <LuxuryButton href="/contact" variant="primary" className="w-full sm:w-auto px-10 py-5">
              Start Your Project
            </LuxuryButton>
            <LuxuryButton href="/projects" variant="outline" className="w-full sm:w-auto px-10 py-5 border-luxury-gold/30 text-white hover:bg-white/5">
              Explore Portfolio
            </LuxuryButton>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute right-12 bottom-0 w-[1px] h-32 bg-luxury-gold/40 origin-bottom hidden md:block"
      />

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}

