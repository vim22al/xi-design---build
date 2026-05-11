'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import LuxuryButton from '@/components/ui/LuxuryButton';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Admin', href: '/admin' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-700 py-6',
        scrolled ? 'glass-panel-dark py-3 border-b border-luxury-gold/10' : 'bg-transparent'
      )}
    >
      <div className="container-luxury flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl lg:text-2xl font-display tracking-[0.15em] text-luxury-gold uppercase group"
        >
          XI Design & Build
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-[13px] uppercase tracking-[0.2em] font-medium transition-all duration-500 inline-block',
                  isActive ? 'nav-link-active scale-110' : 'text-warm-ivory/80 hover:text-luxury-gold',
                  'gold-underline'
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <LuxuryButton href="/contact" variant="green" className="px-6 py-2.5 text-[11px]">
            Book Consultation
          </LuxuryButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-warm-ivory" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
            className="fixed inset-0 bg-rich-black z-40 flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-4xl font-display tracking-widest uppercase",
                    pathname === link.href ? "text-luxury-gold" : "text-warm-ivory"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <LuxuryButton href="/contact" variant="green" onClick={() => setIsOpen(false)}>
                Book Consultation
              </LuxuryButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

