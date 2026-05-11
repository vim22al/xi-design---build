'use client';

import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';

interface Project {
  _id: string;
  title: string;
  slug: string;
  location: string;
  category?: { title: string };
  image: string;
}

interface ProjectGalleryProps {
  projects: Project[];
  categories: string[];
}

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

export default function ProjectGallery({ projects, categories }: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = activeCategory === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category?.title === activeCategory);

  return (
    <div className="container-luxury">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 pb-2 relative group ${
              activeCategory === cat ? 'text-deep-green' : 'text-foreground/40 hover:text-foreground'
            }`}
          >
            {cat}
            <span className={`absolute bottom-0 left-0 h-[1px] bg-deep-green transition-all duration-500 ${
              activeCategory === cat ? 'w-full' : 'w-0 group-hover:w-1/2'
            }`} />
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div layout>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-10 w-auto"
          columnClassName="pl-10 bg-clip-padding"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
                className="mb-10"
              >
                <ProjectCard
                  title={project.title}
                  location={project.location}
                  category={project.category?.title || ''}
                  image={project.image}
                  slug={project.slug}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </Masonry>
      </motion.div>
    </div>
  );
}
