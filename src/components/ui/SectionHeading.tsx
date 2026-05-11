'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  subtitleColor?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = 'left',
  className,
  subtitleColor = 'text-luxury-gold',
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'flex flex-col mb-12 md:mb-20',
      align === 'center' ? 'items-center text-center' : align === 'right' ? 'items-end text-right' : 'items-start text-left',
      className
    )}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block font-medium",
            subtitleColor
          )}
        >
          — {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="heading-editorial mb-6 text-balance [&_span]:text-dual-tone"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-foreground/60 leading-relaxed font-light text-[13px] md:text-sm"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
