'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Alexander Sterling',
    project: 'Private Residence, Mayfair',
    text: 'Working with XI Design & Build was an absolute pleasure. Their attention to detail and ability to translate our abstract ideas into a tangible, breathtaking reality is unmatched.'
  },
  {
    name: 'Eleanor Thorne',
    project: 'Corporate Headquarters, The City',
    text: 'A studio that truly understands the intersection of functionality and high-end design. They delivered our project on time and far exceeded our expectations.'
  },
  {
    name: 'Marcus Vane',
    project: 'Coastal Retreat, Cornwall',
    text: 'From the initial consultation to the final build, the team displayed technical excellence and creative flair. Our holiday home is now a masterpiece of modern architecture.'
  }
];

export default function Testimonials() {
  return (
    <section className="section-spacing bg-warm-ivory relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-luxury-gold/5 rounded-full -ml-32 -mb-32 blur-3xl" />

      <div className="container-luxury">
        <SectionHeading
          subtitle="Client Experience"
          subtitleColor="text-luxury-gold"
          title="Voices of <span className='italic'>Vision</span>"
          align="center"
          className="mx-auto"
        />

        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            className="pb-20 testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white p-12 md:p-16 relative border border-rich-black/5 flex flex-col h-full"
                >
                  <Quote className="absolute top-8 right-8 text-luxury-gold/20 w-12 h-12" />
                  
                  <div className="flex-grow">
                    <p className="text-lg md:text-xl font-display leading-relaxed text-rich-black italic mb-10">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="pt-8 border-t border-luxury-gold/15">
                    <h4 className="text-lg font-display text-dual-tone">{testimonial.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-luxury-gold mt-1">
                      {testimonial.project}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: var(--luxury-gold);
          opacity: 0.3;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: var(--luxury-gold) !important;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}
