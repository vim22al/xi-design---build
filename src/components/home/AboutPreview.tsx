'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import SectionHeading from '@/components/ui/SectionHeading';
import LuxuryButton from '@/components/ui/LuxuryButton';

export default function AboutPreview() {
  const statsRef = React.useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });
  const [hasProjectsFinished, setHasProjectsFinished] = React.useState(false);
  const [hasYearsFinished, setHasYearsFinished] = React.useState(false);

  return (
    <section className="section-spacing bg-warm-ivory overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden group border border-luxury-gold/10">
              <Image
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Luxury Villa"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/40 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Floating Detail */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="absolute -bottom-12 -right-12 hidden md:block w-72 h-72 z-10"
            >
              <div className="w-full h-full relative group/detail">
                <div className="absolute inset-0 border border-luxury-gold/30 bg-white/5 backdrop-blur-md p-4 transition-all duration-500 group-hover/detail:border-luxury-gold/60">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop"
                      alt="Material Excellence"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/detail:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-rich-black/80 backdrop-blur-md p-3 translate-y-full group-hover/detail:translate-y-0 transition-transform duration-500">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium">Bespoke Finishes</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-luxury-gold/40" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-luxury-gold/40" />
              </div>
            </motion.div>
          </motion.div>

          <div className="relative">
            <SectionHeading
              subtitle="Since 2012"
              subtitleColor="text-luxury-gold"
              title="Architecture Designed Around <span className='italic'>Vision, Detail & Lifestyle</span>"
              description="XI Design & Build is a modern architectural design studio focused on delivering bespoke residential and commercial solutions. We believe that great architecture is more than just aesthetics; it is about creating spaces that enhance the way people live and work."
            />
            
            <div className="space-y-6 mb-10">
              <p className="text-foreground/60 font-light leading-relaxed">
                Our approach combines technical excellence with creative innovation, ensuring every project we undertake is delivered with precision and flair.
              </p>
              
              <div ref={statsRef} className="grid grid-cols-2 gap-8 pt-6 border-t border-luxury-gold/15">
                <div>
                  <h4 className="text-3xl font-display text-dual-tone flex items-center min-w-[4ch]">
                    <CountUp
                      start={0}
                      end={isStatsInView ? 550 : 0}
                      duration={2.8}
                      useEasing={true}
                      onEnd={() => setHasProjectsFinished(true)}
                    />
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: hasProjectsFinished ? 1 : 0, scale: hasProjectsFinished ? 1 : 0.5 }}
                      transition={{ duration: 0.4 }}
                      className="inline-block origin-left -ml-0.5"
                    >
                      +
                    </motion.span>
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-luxury-gold/70 mt-2">Completed Projects</p>
                </div>
                <div>
                  <h4 className="text-3xl font-display text-dual-tone flex items-center min-w-[3ch]">
                    <CountUp
                      start={0}
                      end={isStatsInView ? 15 : 0}
                      duration={2.2}
                      useEasing={true}
                      onEnd={() => setHasYearsFinished(true)}
                    />
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: hasYearsFinished ? 1 : 0, scale: hasYearsFinished ? 1 : 0.5 }}
                      transition={{ duration: 0.4 }}
                      className="inline-block origin-left -ml-0.5"
                    >
                      +
                    </motion.span>
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-luxury-gold/70 mt-2">Years Experience</p>
                </div>
              </div>
            </div>

            <LuxuryButton href="/about" variant="green">
              Our Story
            </LuxuryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
