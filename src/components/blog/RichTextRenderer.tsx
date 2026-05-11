import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';

interface RichTextRendererProps {
  value: any;
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-12 group">
          <div className="relative aspect-[16/9] overflow-hidden border border-deep-green/10">
            <Image
              src={urlForImage(value).url()}
              alt={value.alt || 'Blog Image'}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-4 text-center text-sm text-rich-black/40 italic font-light tracking-wide">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-display text-dual-tone mt-16 mb-8 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-display text-dual-tone mt-16 mb-6 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-display text-dual-tone mt-12 mb-4 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl md:text-2xl font-display text-dual-tone mt-10 mb-4 leading-tight">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-lg text-rich-black/70 leading-relaxed mb-8 font-light">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-12 border-l-2 border-luxury-gold bg-ivory p-10 md:p-16 relative overflow-hidden">
        <span className="absolute top-0 right-0 text-9xl text-luxury-gold/5 font-display select-none -translate-y-1/4 translate-x-1/4">"</span>
        <div className="text-2xl md:text-3xl font-display italic text-rich-black leading-relaxed relative z-10">
          {children}
        </div>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-8 space-y-3 text-rich-black/70 font-light text-lg">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-8 space-y-3 text-rich-black/70 font-light text-lg">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-rich-black">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-deep-green underline underline-offset-4 decoration-deep-green/30 hover:decoration-deep-green transition-all"
        >
          {children}
        </Link>
      );
    },
  },
};

export default function RichTextRenderer({ value }: RichTextRendererProps) {
  if (!value) return null;
  
  return (
    <div className="prose-custom">
      <PortableText value={value} components={components} />
    </div>
  );
}
