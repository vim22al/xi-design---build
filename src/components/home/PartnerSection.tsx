'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function PartnerSection() {
  return (
    <section className="section-spacing bg-rich-black text-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Top gold rule */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />

      <div className="container-luxury relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-medium mb-8 block">
              Construction Partner
            </span>
          </motion.div>

          {/* Thin gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-16 h-[1px] bg-luxury-gold/40 mx-auto mb-12"
          />

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-5xl font-display leading-[1.1] mb-10 text-warm-ivory"
          >
            Delivered Through{' '}
            <span className="italic text-luxury-gold">Trusted Construction</span>{' '}
            Expertise
          </motion.h2>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-warm-ivory/50 font-light leading-relaxed text-base md:text-lg max-w-3xl mx-auto mb-16"
          >
            XI Design &amp; Build collaborates with HSS Design &amp; Build to transform architectural
            vision into exceptional built environments — with precision craftsmanship and
            professional project delivery at every stage.
          </motion.p>

          {/* Three pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-luxury-gold/10 border border-luxury-gold/10 mb-16"
          >
            {[
              { label: 'Architecture & Design', desc: 'XI Design & Build leads the vision, planning and technical documentation.' },
              { label: 'Build Execution', desc: 'HSS Design & Build delivers precision construction and expert site management.' },
              { label: 'End-to-End Delivery', desc: 'A seamless handover from concept to completed, liveable space.' },
            ].map((pillar, i) => (
              <div key={i} className="bg-rich-black/80 backdrop-blur-sm px-8 py-10 text-left hover:bg-white/5 transition-colors duration-500">
                <span className="text-luxury-gold font-display text-2xl block mb-4">0{i + 1}</span>
                <h4 className="text-sm uppercase tracking-[0.2em] text-warm-ivory font-medium mb-3">{pillar.label}</h4>
                <p className="text-[13px] text-warm-ivory/40 font-light leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <a
              href="https://hssdb.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-deep-green text-white uppercase tracking-[0.25em] text-[10px] px-10 py-5 font-medium border border-transparent hover:border-luxury-gold/50 hover:shadow-lg hover:shadow-luxury-gold/10 transition-all duration-700 group"
            >
              Visit HSS Design &amp; Build
              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
