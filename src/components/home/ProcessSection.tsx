'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with a deep dive into your vision, requirements, and the unique potential of your site.'
  },
  {
    number: '02',
    title: 'Concept Design',
    description: 'Our team develops initial sketches and 3D models to visualize the architectural direction.'
  },
  {
    number: '03',
    title: 'Planning Approval',
    description: 'We navigate the complexities of local planning authorities to secure necessary permissions.'
  },
  {
    number: '04',
    title: 'Technical Design',
    description: 'Detailed drawings and specifications are produced for building regulations and construction.'
  },
  {
    number: '05',
    title: 'Construction',
    description: 'Your vision comes to life through expert craftsmanship and dedicated project management.'
  }
];

export default function ProcessSection() {
  return (
    <section className="section-spacing bg-rich-black text-warm-ivory relative overflow-hidden">
      {/* Decorative Brand Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-[1px] bg-luxury-gold/20" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-luxury-gold/20" />
      <div className="absolute inset-0 grain-overlay opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 vignette opacity-30 pointer-events-none" />

      <div className="container-luxury">
        <SectionHeading
          subtitle="Our Process"
          title="The Journey from Blueprint <br /> to <span className='italic'>Reality</span>"
          description="A structured, transparent approach that ensures your architectural project is delivered with excellence at every stage."
          className="text-white"
        />

        <div className="relative mt-20">
          {/* Timeline Line */}
          <div className="absolute top-0 left-[20px] md:left-1/2 w-[1px] h-full bg-luxury-gold/15 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 px-4 md:px-12 text-center md:text-left">
                  <div className={cn(
                    "flex flex-col group",
                    index % 2 === 0 ? "md:items-start" : "md:items-end md:text-right"
                  )}>
                    <span className="font-display text-4xl mb-4 text-[#5D1E21] opacity-60 transition-opacity duration-500 group-hover:opacity-100">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-display mb-4 text-dual-tone">{step.title}</h3>
                    <p className="text-sm text-warm-ivory/50 leading-relaxed max-w-sm transition-colors duration-500 group-hover:text-warm-ivory/80">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Point */}
                <div className="absolute left-[20px] md:left-1/2 top-0 md:top-8 w-10 h-10 bg-rich-black border border-luxury-gold rounded-full flex items-center justify-center -translate-x-1/2 z-10 transition-colors duration-500">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                </div>

                {/* Empty Space for layout */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
