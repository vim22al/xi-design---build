'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  image: string;
  slug: string;
  className?: string;
}

export default function ProjectCard({
  title,
  category,
  location,
  image,
  slug,
  className,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
        className={cn('premium-card group cursor-pointer border-none', className)}
      >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-110"
        />
        <div className="cinematic-overlay opacity-20 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-rich-black/10 group-hover:bg-gradient-to-t from-rich-black/90 via-rich-black/40 to-transparent transition-all duration-700" />
        
        {/* Reveal Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out flex justify-between items-end">
          <div className="text-white">
            <span className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2 block font-bold">{category}</span>
            <h3 className="text-xl font-display text-dual-tone">{title}</h3>
          </div>
          <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold bg-rich-black/20 backdrop-blur-md group-hover:bg-luxury-gold group-hover:text-rich-black group-hover:border-luxury-gold transition-all duration-500">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      {/* Static Info (Minimal) */}
      <div className="pt-6 flex justify-between items-start group-hover:opacity-0 transition-opacity duration-500">
        <div>
          <h3 className="text-base font-display tracking-wide text-dual-tone">{title}</h3>
          <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mt-1">{location}</p>
        </div>
      </div>
      </motion.div>
    </Link>
  );
}
