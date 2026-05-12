import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { postBySlugQuery, postSlugsQuery, latestPostsQuery, allCategoriesQuery } from '@/sanity/lib/queries';
import FadeInSection from '@/components/ui/FadeInSection';
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import RichTextRenderer from '@/components/blog/RichTextRenderer';
import BlogSidebar from '@/components/blog/BlogSidebar';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    return {
      title: 'Post Not Found | XI DESIGN BUILD',
    };
  }

  return {
    title: `${post.seoTitle || post.title} | XI Journal`,
    description: post.seoDescription || post.excerpt || `Read our latest journal entry: ${post.title}.`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  const [post, recentPosts, categories] = await Promise.all([
    client.fetch(postBySlugQuery, { slug }),
    client.fetch(latestPostsQuery),
    client.fetch(allCategoriesQuery),
  ]);

  if (!post) {
    notFound();
  }

  const publishDate = new Date(post.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Filter out current post from recent posts
  const filteredRecentPosts = recentPosts.filter((p: any) => p.slug !== slug);

  return (
    <main className="min-h-screen bg-white">
      {/* Header / Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-ivory">
        <div className="container-luxury">
          <FadeInSection>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-deep-green mb-12 hover:text-rich-black transition-colors group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              Back to Journal
            </Link>

            <div className="max-w-4xl">
              <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-bold mb-6 block">
                {post.category?.title}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display text-dual-tone mb-10 leading-[1.1]">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-8 py-8 border-t border-deep-green/10">
                <div className="flex items-center gap-4">
                  {post.author?.image && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-deep-green/20">
                      <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-rich-black/40 mb-0.5">Written By</span>
                    <span className="text-sm font-semibold text-rich-black">{post.author?.name}</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-rich-black/40 mb-0.5">Published</span>
                  <span className="text-sm font-semibold text-rich-black">{publishDate}</span>
                </div>

                <div className="ml-auto flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-widest text-rich-black/40 font-bold hidden sm:block">Share:</span>
                  <div className="flex gap-3">
                    <button className="p-2 border border-deep-green/10 text-rich-black/40 hover:text-deep-green hover:border-deep-green/30 transition-all rounded-full">
                      <Facebook size={14} />
                    </button>
                    <button className="p-2 border border-deep-green/10 text-rich-black/40 hover:text-deep-green hover:border-deep-green/30 transition-all rounded-full">
                      <Twitter size={14} />
                    </button>
                    <button className="p-2 border border-deep-green/10 text-rich-black/40 hover:text-deep-green hover:border-deep-green/30 transition-all rounded-full">
                      <Linkedin size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Hero Image */}
      {post.image && (
        <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            priority 
            className="object-cover"
          />
        </section>
      )}

      {/* Content Section */}
      <section className="section-spacing">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <FadeInSection>
                <div className="max-w-3xl">
                  {/* Excerpt/Intro */}
                  {post.excerpt && (
                    <div className="mb-16">
                      <p className="text-xl md:text-2xl font-light text-rich-black/80 leading-relaxed italic">
                        {post.excerpt}
                      </p>
                    </div>
                  )}

                  {/* Body Content */}
                  <RichTextRenderer value={post.content} />
                  
                  {/* Bottom Share */}
                  <div className="mt-24 pt-12 border-t border-deep-green/10 flex flex-wrap items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                      <Share2 className="text-deep-green" size={20} />
                      <span className="text-sm font-semibold text-rich-black/40 uppercase tracking-widest">Share this entry</span>
                    </div>
                    <div className="flex gap-6">
                      <button className="text-sm text-rich-black/60 hover:text-deep-green transition-colors font-light tracking-wide">Facebook</button>
                      <button className="text-sm text-rich-black/60 hover:text-deep-green transition-colors font-light tracking-wide">Twitter</button>
                      <button className="text-sm text-rich-black/60 hover:text-deep-green transition-colors font-light tracking-wide">LinkedIn</button>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <FadeInSection delay={0.2}>
                <BlogSidebar 
                  author={post.author} 
                  categories={categories} 
                  recentPosts={filteredRecentPosts} 
                />
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section could go here if needed */}
    </main>
  );
}
