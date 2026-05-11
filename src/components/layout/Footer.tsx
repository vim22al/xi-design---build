'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Admin Studio', href: '/admin' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Architectural Design', href: '/services' },
    { name: 'Interior Curation', href: '/services' },
    { name: 'Sustainable Building', href: '/services' },
    { name: 'Urban Planning', href: '/services' },
    { name: 'Consultation', href: '/services' },
  ],
  socials: [
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-rich-black text-warm-ivory pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl lg:text-3xl font-display tracking-[0.15em] text-luxury-gold uppercase block mb-8">
              XI Design & Build
            </Link>
            <p className="text-sm text-warm-ivory/50 leading-relaxed mb-8 max-w-xs">
              Crafting bespoke architectural excellence and premium interior design solutions for sophisticated living spaces globally.
            </p>
            <div className="flex gap-6">
              {footerLinks.socials.map((social, i) => (
                <a key={i} href={social.href} className="text-warm-ivory/40 hover:text-luxury-gold transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 lg:col-span-2 gap-8">
            <div>
              <h4 className="text-sm uppercase tracking-[0.3em] font-medium text-luxury-gold mb-8">Navigation</h4>
              <ul className="space-y-4">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-warm-ivory/40 hover:text-luxury-gold transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-[0.3em] font-medium text-luxury-gold mb-8">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-sm text-warm-ivory/40 hover:text-luxury-gold transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h4 className="text-sm uppercase tracking-[0.3em] font-medium text-luxury-gold mb-8">Newsletter</h4>
            <p className="text-sm text-warm-ivory/40 mb-6">Stay updated with our latest architectural insights and projects.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border-b border-white/10 py-4 px-0 text-sm focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-white/20"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-luxury-gold hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-luxury-gold/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
            © 2026 XI DESIGN & BUILD. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-xs uppercase tracking-[0.2em] text-warm-ivory/40 hover:text-luxury-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs uppercase tracking-[0.2em] text-warm-ivory/40 hover:text-luxury-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
