'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 1, ease: [0.7, 0, 0.3, 1] }
          }}
          className="preloader-bg"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-[1px] w-64 bg-luxury-gold mb-6 origin-left"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-4 overflow-hidden"
            >
              <span className="text-dual-tone font-display text-3xl tracking-[0.2em] uppercase">
                XI Design & Build
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-[8px] text-white uppercase tracking-[0.5em] mt-4"
            >
              Excellence in Design
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
