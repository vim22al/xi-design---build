'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Twitter, ArrowRight, ExternalLink } from 'lucide-react';

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
    <footer className="bg-gradient-to-b from-[#5D1E21] via-[#5D1E21]/95 to-[#421517] text-warm-ivory pt-24 pb-12 relative overflow-hidden border-t border-luxury-gold/20">
      {/* Cinematic Ambient Overlay / Top Separator Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/10 via-transparent to-black/40 pointer-events-none" />
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl lg:text-3xl font-display tracking-[0.15em] text-luxury-gold uppercase block mb-8">
              XI Design & Build
            </Link>
            <p className="text-sm text-warm-ivory/80 leading-relaxed mb-8 max-w-xs font-light">
              Crafting bespoke architectural excellence and premium interior design solutions for sophisticated living spaces globally.
            </p>

            <div className="space-y-3 mb-8">
              <a href="mailto:sales@hssdb.co.uk" className="block text-sm text-warm-ivory/70 hover:text-luxury-gold transition-colors duration-300">
                sales@hssdb.co.uk
              </a>
              <a href="tel:07902311786" className="block text-sm text-warm-ivory/70 hover:text-luxury-gold transition-colors duration-300">
                07902311786
              </a>
              <p className="text-sm text-warm-ivory/70 font-light">
                110 Hagley Road West,<br />Birmingham, B67 5EZ
              </p>
            </div>

            <div className="flex gap-6">
              {footerLinks.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-warm-ivory/70 hover:text-luxury-gold hover:drop-shadow-[0_0_8px_rgba(166,130,74,0.6)] transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 lg:col-span-2 gap-8 relative z-10">
            <div>
              <h4 style={{ color: '#A6824A' }} className="!text-[#A6824A] text-sm uppercase tracking-[0.3em] font-medium mb-8 antialiased opacity-100">Navigation</h4>
              <ul className="space-y-4">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-warm-ivory/70 hover:text-luxury-gold relative py-0.5 group transition-colors duration-300 inline-block"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#A6824A' }} className="!text-[#A6824A] text-sm uppercase tracking-[0.3em] font-medium mb-8 antialiased opacity-100">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-sm text-warm-ivory/70 hover:text-luxury-gold relative py-0.5 group transition-colors duration-300 inline-block"
                    >
                      {service.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Construction Partner Column */}
          <div className="lg:col-span-1 relative z-10">
            <h4 style={{ color: '#A6824A' }} className="!text-[#A6824A] text-sm uppercase tracking-[0.3em] font-medium mb-8 antialiased opacity-100">Construction Partner</h4>
            <p className="text-sm text-warm-ivory/70 leading-relaxed mb-6 font-light">
              Build delivery through our trusted construction partner.
            </p>
            <a
              href="https://hssdb.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-warm-ivory/80 hover:text-luxury-gold transition-colors duration-500 group border-b border-warm-ivory/20 hover:border-luxury-gold pb-0.5"
            >
              HSS Design &amp; Build
              <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
            </a>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1 relative z-10">
            <h4 style={{ color: '#A6824A' }} className="!text-[#A6824A] text-sm uppercase tracking-[0.3em] font-medium mb-8 antialiased opacity-100">Newsletter</h4>
            <p className="text-sm text-warm-ivory/70 mb-6 font-light">Stay updated with our latest architectural insights and projects.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-rich-black/20 border border-luxury-gold/30 rounded py-3.5 px-4 text-sm text-warm-ivory focus:outline-none focus:border-luxury-gold transition-all duration-300 placeholder:text-warm-ivory/40 shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-ivory/80 hover:text-luxury-gold hover:translate-x-0.5 transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-luxury-gold/20 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <p className="text-[13px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
            © 2026 XI DESIGN & BUILD. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-xs uppercase tracking-[0.2em] text-warm-ivory/70 hover:text-luxury-gold transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="text-xs uppercase tracking-[0.2em] text-warm-ivory/70 hover:text-luxury-gold transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
