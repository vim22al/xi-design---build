'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  slug: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  image,
  category,
  slug,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col h-full bg-warm-ivory/50 backdrop-blur-sm border border-luxury-gold/10 hover:border-luxury-gold/25 transition-all duration-700 hover:shadow-2xl hover:shadow-luxury-gold/5"
    >
      <Link href={`/blog/${slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 bg-luxury-gold text-rich-black px-4 py-2 text-[8px] uppercase tracking-widest font-bold z-10 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500">
          {category}
        </div>
      </Link>
      
      <div className="p-10 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] uppercase tracking-widest text-rich-black/30 font-semibold">
            {date}
          </span>
          <div className="h-[1px] w-8 bg-luxury-gold/30" />
          <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">
            {category}
          </span>
        </div>
        
        <h3 className="text-xl font-display mb-6 group-hover:text-luxury-gold transition-colors duration-500 line-clamp-2 leading-tight text-dual-tone">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        
        <p className="text-sm text-rich-black/50 leading-relaxed line-clamp-3 mb-10 flex-grow font-light">
          {excerpt}
        </p>
        
        <Link 
          href={`/blog/${slug}`}
          className="text-[10px] uppercase tracking-[0.25em] font-bold text-rich-black flex items-center gap-4 group/link hover:text-luxury-gold transition-colors"
        >
          Read Perspective
          <div className="h-[1px] w-8 bg-luxury-gold group-hover/link:w-16 transition-all duration-500" />
        </Link>
      </div>
    </motion.div>
  );
}
