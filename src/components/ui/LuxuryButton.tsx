'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LuxuryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'dark' | 'green' | 'burgundy';
  children: React.ReactNode;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function LuxuryButton({
  variant = 'primary',
  children,
  className,
  href,
  size = 'md',
  ...props
}: LuxuryButtonProps) {
  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'btn-luxury inline-flex items-center justify-center cursor-pointer',
        variant === 'outline' && 'bg-transparent border border-luxury-gold/40 text-luxury-gold hover:bg-luxury-gold hover:text-rich-black hover:border-luxury-gold',
        variant === 'ghost' && 'bg-transparent text-luxury-gold/70 hover:bg-luxury-gold/5 hover:text-luxury-gold',
        variant === 'dark' && 'bg-rich-black text-luxury-gold border border-luxury-gold/10 hover:border-luxury-gold hover:bg-luxury-gold hover:text-rich-black',
        variant === 'green' && 'bg-deep-green text-white hover:bg-[#0d2d20] tracking-[0.2em] uppercase text-[10px] px-10 py-5 transition-all duration-700 shadow-xl shadow-deep-green/10',
        variant === 'burgundy' && 'bg-deep-burgundy text-white hover:bg-[#3d1316] tracking-[0.2em] uppercase text-[10px] px-10 py-5 transition-all duration-700 shadow-xl shadow-deep-burgundy/10',
        variant === 'primary' && 'bg-luxury-gold text-rich-black hover:bg-[#c49d5c] hover:shadow-lg hover:shadow-luxury-gold/20',
        size === 'sm' && 'px-6 py-3 text-[9px]',
        size === 'lg' && 'px-12 py-6 text-[11px]',
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button {...props} className="inline-block">
      {content}
    </button>
  );
}
