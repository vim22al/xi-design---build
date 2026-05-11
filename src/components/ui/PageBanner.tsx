'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image?: string;
  className?: string;
}

export default function PageBanner({
  title,
  subtitle,
  image,
  className,
}: PageBannerProps) {
  return (
    <section className={cn('relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-rich-black', className)}>
      {/* Brand Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--luxury-gold)_0%,_transparent_40%),_radial-gradient(circle_at_bottom_left,_var(--luxury-gold)_0%,_transparent_40%)] opacity-10 z-10" />
      
      {image && (
        <>
          <div className="absolute inset-0 bg-rich-black/60 z-10" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
        </>
      )}
      
      <div className="container-luxury relative z-20 text-center">
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-luxury-gold uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block font-bold"
          >
            {subtitle}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display text-dual-tone tracking-tight leading-none"
        >
          {title}
        </motion.h1>

        
        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-[1px] w-24 bg-luxury-gold mx-auto mt-12"
        />
      </div>
    </section>
  );
}
