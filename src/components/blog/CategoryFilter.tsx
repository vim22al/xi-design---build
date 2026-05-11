'use client';

import React from 'react';

interface CategoryFilterProps {
  categories: any[];
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-16 overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex items-center gap-4 min-w-max">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold border transition-all duration-300 ${
            activeCategory === 'all'
              ? 'bg-deep-green border-deep-green text-white'
              : 'bg-transparent border-deep-green/10 text-rich-black/40 hover:border-deep-green hover:text-deep-green'
          }`}
        >
          All Stories
        </button>
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => onCategoryChange(cat.slug)}
            className={`px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold border transition-all duration-300 ${
              activeCategory === cat.slug
                ? 'bg-deep-green border-deep-green text-white'
                : 'bg-transparent border-deep-green/10 text-rich-black/40 hover:border-deep-green hover:text-deep-green'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>
    </div>
  );
}
