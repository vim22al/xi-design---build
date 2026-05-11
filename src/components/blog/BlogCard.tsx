import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import FadeInSection from '@/components/ui/FadeInSection';

interface BlogCardProps {
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

export default function BlogCard({ post }: BlogCardProps) {
  const date = new Date(post.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <FadeInSection>
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden border border-deep-green/10 mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-luxury-gold text-[10px] uppercase tracking-[0.2em] px-4 py-2 font-bold border border-luxury-gold/20">
              {post.category}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-rich-black/40 font-bold">
            <div className="flex items-center gap-2">
              <Calendar size={12} className="text-deep-green/50" />
              {date}
            </div>
            <div className="flex items-center gap-2">
              <User size={12} className="text-deep-green/50" />
              {post.author}
            </div>
          </div>

          <h3 className="text-xl font-display text-dual-tone group-hover:scale-105 transition-transform duration-500 leading-tight line-clamp-2">
            {post.title}
          </h3>

          <p className="text-rich-black/60 font-light leading-relaxed line-clamp-2 text-sm">
            {post.excerpt}
          </p>

          <div className="pt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-rich-black group-hover:text-deep-green transition-all duration-500">
            Read Article
            <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-2" />
          </div>
        </div>
      </Link>
    </FadeInSection>
  );
}
