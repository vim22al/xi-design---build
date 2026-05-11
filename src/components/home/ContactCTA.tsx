'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LuxuryButton from '@/components/ui/LuxuryButton';

export default function ContactCTA() {
  return (
    <section className="py-32 bg-rich-black relative overflow-hidden text-center">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--luxury-gold)_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--luxury-gold)_0%,_transparent_50%)] opacity-10" />

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-luxury-gold uppercase tracking-[0.4em] text-xs mb-6 block font-medium">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display mb-10 leading-tight text-dual-tone">
            Let's Build Something <br /> <span className="italic">Remarkable</span>
          </h2>
          <p className="text-base md:text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed text-warm-ivory/60">
            Ready to start your architectural journey? Contact us for a bespoke consultation and let our experts guide you from vision to reality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <LuxuryButton href="/contact" variant="primary" className="px-12 py-5 text-sm">
              Start Your Project
            </LuxuryButton>
            <LuxuryButton href="tel:+441234567890" variant="outline" className="px-12 py-5 text-sm border-luxury-gold/30 text-white hover:bg-white/5">
              Call Us Directly
            </LuxuryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
