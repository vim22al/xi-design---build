import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

interface BlogSidebarProps {
  recentPosts?: any[];
  categories?: any[];
  author?: any;
}

export default function BlogSidebar({ recentPosts, categories, author }: BlogSidebarProps) {
  return (
    <aside className="space-y-16">
      {/* Author Card */}
      {author && (
        <div className="bg-ivory p-8 border border-deep-green/5">
          <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-8 text-center">About the Author</h5>
          <div className="flex flex-col items-center text-center space-y-6">
            {author.image && (
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-deep-green/10">
                <Image src={author.image} alt={author.name} fill className="object-cover" />
              </div>
            )}
            <div>
              <h6 className="text-xl font-display text-dual-tone mb-3">{author.name}</h6>
              <p className="text-sm text-rich-black/50 font-light leading-relaxed">
                {author.bio}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Categories */}
      {categories && categories.length > 0 && (
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-dual-tone mb-8 border-b border-luxury-gold/10 pb-4">Categories</h5>
          <ul className="space-y-4">
            {categories.map((cat) => (
              <li key={cat._id}>
                <Link 
                  href={`/blog?category=${cat.slug}`} 
                  className="flex justify-between items-center group text-sm text-rich-black/60 hover:text-luxury-gold transition-colors"
                >
                  <span className="font-light tracking-wide">{cat.title}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold/0 group-hover:bg-luxury-gold transition-all"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Recent Posts */}
      {recentPosts && recentPosts.length > 0 && (
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-dual-tone mb-8 border-b border-luxury-gold/10 pb-4">Latest Stories</h5>
          <div className="space-y-8">
            {recentPosts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug}`} className="group flex gap-4">
                <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden border border-deep-green/10">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold mb-1">{post.category}</span>
                  <h6 className="text-sm font-display text-dual-tone group-hover:text-luxury-gold transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h6>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter */}
      <div className="bg-rich-black p-10 text-white relative overflow-hidden border border-deep-green/20">
        <div className="absolute top-0 right-0 w-24 h-24 bg-deep-green/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl"></div>
        <div className="relative z-10 space-y-6">
          <Mail className="text-deep-green mb-4" size={24} />
          <h5 className="text-2xl font-display text-white">The XI Journal</h5>
          <p className="text-white/50 text-xs font-light leading-relaxed">
            Curated architectural insights delivered to your inbox once a month.
          </p>
          <form className="space-y-4 pt-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white/5 border-b border-white/10 py-3 text-xs outline-none focus:border-deep-green transition-colors placeholder:text-white/20"
            />
            <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-deep-green hover:text-white transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
