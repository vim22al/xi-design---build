'use client';

import React from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import LuxuryButton from '@/components/ui/LuxuryButton';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Project {
  _id: string;
  title: string;
  slug: string;
  location: string;
  category?: { title: string };
  image: string;
}

interface ProjectsMasonryProps {
  projects: Project[];
}

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

export default function ProjectsMasonry({ projects }: ProjectsMasonryProps) {
  return (
    <section className="section-spacing bg-warm-ivory/40">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <SectionHeading
            subtitle="Selected Works"
            title="Exceptional Projects, <br /> <span class='italic'>Timeless Design</span>"
            className="mb-0"
          />
          <LuxuryButton href="/projects" variant="outline">
            Explore All Projects
          </LuxuryButton>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-6 w-auto"
          columnClassName="pl-6 bg-clip-padding"
        >
          {projects.map((project, index) => (
            <Link key={project._id} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="mb-6 group cursor-pointer relative overflow-hidden"
              >
                <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 bg-gradient-to-t from-rich-black/90 via-rich-black/40 to-transparent">
                    <span className="text-luxury-gold text-[10px] uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {project.location}
                    </span>
                    <h3 className="text-xl font-display text-dual-tone translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      {project.title}
                    </h3>
                    <div className="w-12 h-[1px] mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 bg-luxury-gold" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
