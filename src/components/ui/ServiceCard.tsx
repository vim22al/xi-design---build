'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  number: string;
  className?: string;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  number,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        'group relative p-10 bg-white/5 border border-white/5 transition-all duration-700 hover:border-luxury-gold/20',
        className
      )}
    >
      <div className="flex justify-between items-start mb-12">
        <div className="w-12 h-12 flex items-center justify-center transition-all duration-700 bg-luxury-gold/10 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-rich-black">
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-4xl font-display transition-colors duration-700 text-rich-black/5 group-hover:text-luxury-gold/20">
          {number}
        </span>
      </div>
      
      <h3 className="text-xl font-display mb-6 transition-colors duration-500 text-dual-tone">
        {title}
      </h3>

      <p className="text-sm text-foreground/50 leading-relaxed group-hover:text-foreground/70 transition-colors duration-500">
        {description}
      </p>
      
      <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-4 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700 text-luxury-gold">
        Discover Process <div className="h-[1px] w-8 bg-luxury-gold" />
      </div>
    </motion.div>
  );
}
