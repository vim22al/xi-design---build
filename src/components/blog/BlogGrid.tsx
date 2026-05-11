'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import CategoryFilter from './CategoryFilter';
import BlogCard from './BlogCard';
import BlogSidebar from './BlogSidebar';
import FadeInSection from '@/components/ui/FadeInSection';

interface BlogGridProps {
  initialPosts: any[];
  categories: any[];
  recentPosts: any[];
}

export default function BlogGrid({ initialPosts, categories, recentPosts }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') return initialPosts;
    return initialPosts.filter((post) => post.categorySlug === activeCategory);
  }, [activeCategory, initialPosts]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-8">
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-24 px-8 text-center glass-panel-light border border-luxury-gold/10 flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 rounded-full border border-luxury-gold/20 flex items-center justify-center mb-2">
              <span className="text-luxury-gold font-display text-2xl">XI</span>
            </div>
            <h3 className="text-2xl font-display text-dual-tone uppercase tracking-widest">Awaiting Content</h3>
            <p className="text-rich-black/40 font-light max-w-sm mx-auto leading-relaxed">
              Our journal is currently being curated with the latest architectural insights. 
              Please check back soon or visit our <Link href="/admin" className="text-luxury-gold font-medium border-b border-luxury-gold/30 hover:border-luxury-gold transition-all">Studio</Link> to add your first story.
            </p>
          </div>
        )}
      </div>

      <div className="lg:col-span-4">
        <BlogSidebar recentPosts={recentPosts} categories={categories} />
      </div>
    </div>
  );
}
