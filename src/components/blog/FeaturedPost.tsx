import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from '@/components/ui/FadeInSection';

interface FeaturedPostProps {
  post: {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    author: string;
    category: string;
    publishedAt: string;
  };
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  if (!post) return null;

  return (
    <div className="mb-32">
      <FadeInSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-luxury-gold"></span>
              <span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold">
                Featured Insight
              </span>
            </div>
            
            <div>
              <span className="text-rich-black/30 text-[10px] uppercase tracking-widest block mb-4 font-bold">
                {post.category} — {new Date(post.publishedAt).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
              </span>
              <h2 className="text-4xl md:text-6xl font-display leading-[1.1] mb-8 text-dual-tone">
                {post.title}
              </h2>
            </div>

            <p className="text-rich-black/60 font-light text-lg mb-10 leading-relaxed line-clamp-3 max-w-xl">
              {post.excerpt}
            </p>

            <Link href={`/blog/${post.slug}`} className="group inline-flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-rich-black">
              Explore the Story
              <div className="relative overflow-hidden w-16 h-[1px]">
                <div className="absolute inset-0 bg-rich-black/20"></div>
                <div className="absolute inset-0 bg-luxury-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              </div>
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[16/11] overflow-hidden border border-luxury-gold/10 group">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill
                priority
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-rich-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
