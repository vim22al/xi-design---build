import PageBanner from "@/components/ui/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import FadeInSection from "@/components/ui/FadeInSection";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | XI DESIGN BUILD",
  description: "Let’s Discuss Your Vision. Reach out to our architectural studio to start your next luxury design and build project.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "XI Design & Build",
  "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "110 Hagley Road West",
    "addressLocality": "Birmingham",
    "postalCode": "B67 5EZ",
    "addressCountry": "UK"
  },
  "telephone": "07902311786",
  "email": "sales@hssdb.co.uk",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "07:00",
      "closes": "17:00"
    }
  ]
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner 
        title="Let&apos;s Discuss Your Vision" 
        subtitle="Contact Us"
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
      />

      <section className="section-spacing">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            {/* Contact Details Side */}
            <div className="lg:col-span-5">
              <FadeInSection direction="left">
                <SectionHeading
                  subtitle="Get in Touch"
                  subtitleColor="text-luxury-gold"
                  title="Crafting Your <br /> <span class='italic text-luxury-gold'>Future Space</span>"
                  description="We are available for consultations worldwide. Our team of architects and designers are ready to bring technical precision to your creative vision."
                />

                <div className="space-y-12 mt-16">
                  {/* Studio Address */}
                  <div className="flex items-start gap-8 group">
                    <div className="w-14 h-14 flex items-center justify-center border border-rich-black/5 group-hover:border-luxury-gold transition-colors duration-500">
                      <MapPin className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-foreground/40 mb-3 font-medium">Our Studio</h4>
                      <p className="text-lg font-display leading-tight">110 Hagley Road West,<br />Birmingham, B67 5EZ</p>
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="flex items-start gap-5 md:gap-6 group">
                      <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-rich-black/5 group-hover:border-luxury-gold transition-colors duration-500">
                        <Phone className="w-4 h-4 text-luxury-gold" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2 font-medium">Call Us</h4>
                        <div className="space-y-1.5">
                          <a href="tel:07902311786" className="block text-[15px] md:text-base font-display hover:text-luxury-gold transition-colors whitespace-nowrap tracking-wide">07902311786</a>
                          <a href="tel:02039090313" className="block text-[15px] md:text-base font-display hover:text-luxury-gold transition-colors whitespace-nowrap tracking-wide">0203 909 0313</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-5 md:gap-6 group">
                      <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-rich-black/5 group-hover:border-luxury-gold transition-colors duration-500">
                        <Mail className="w-4 h-4 text-luxury-gold" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2 font-medium">Email Us</h4>
                        <a href="mailto:sales@hssdb.co.uk" className="block text-[15px] md:text-base font-display hover:text-luxury-gold transition-colors whitespace-nowrap tracking-wide">sales@hssdb.co.uk</a>
                      </div>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="pt-12 border-t border-rich-black/5">
                    <h4 className="text-[10px] uppercase tracking-widest text-foreground/40 mb-6 font-medium">Office Hours</h4>
                    <ul className="space-y-3 text-sm font-light">
                      <li className="flex justify-between"><span>Monday — Saturday</span> <span>07:00 - 17:00</span></li>
                      <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                    </ul>
                  </div>

                  {/* Construction Partner Reference */}
                  <div className="pt-12 border-t border-rich-black/5">
                    <h4 className="text-[10px] uppercase tracking-widest text-foreground/40 mb-3 font-medium">Construction Services</h4>
                    <p className="text-[13px] text-foreground/50 font-light leading-relaxed mb-4">
                      Build and construction services are available through our trusted partner.
                    </p>
                    <a
                      href="https://hssdb.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] text-foreground/60 hover:text-luxury-gold transition-colors duration-500 group border-b border-rich-black/10 hover:border-luxury-gold/40 pb-0.5"
                    >
                      HSS Design &amp; Build
                      <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="pt-12">
                    <h4 className="text-[10px] uppercase tracking-widest text-foreground/40 mb-6 font-medium">Follow Our Journey</h4>
                    <div className="flex gap-6">
                      {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 border border-rich-black/5 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500">
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <FadeInSection direction="right">
                <div className="bg-warm-ivory/30 p-10 md:p-20 border border-rich-black/5">
                  <h3 className="text-2xl font-display mb-12 italic text-dual-tone">Book Your Design Consultation</h3>
                  <ContactForm />
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Handshake Consultation Moment Section */}
      <section className="pb-32 pt-16">
        <div className="container-luxury">
          <FadeInSection>
            <div className="relative w-full aspect-[21/9] md:aspect-[24/9] rounded-2xl overflow-hidden shadow-2xl group border border-rich-black/5">
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Client architecture consultation meeting handshake"
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105 saturate-[0.85] contrast-105 brightness-95"
              />
              {/* Filmic Ambient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/40 via-transparent to-black/10 pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none" />
              
              {/* Context Banner Overlay */}
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg pointer-events-none">
                <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold block mb-2 drop-shadow-md">
                  Trusted Partnerships
                </span>
                <p className="text-white text-lg md:text-xl font-display leading-tight drop-shadow-md">
                  Building bespoke visions through collaborative studio excellence.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-spacing bg-warm-ivory/20 border-t border-rich-black/5">
        <div className="container-luxury">
          <FadeInSection className="max-w-xl mx-auto text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold block mb-3">
              Location
            </span>
            <h3 className="text-2xl md:text-4xl font-display mb-6 text-dual-tone">
              Visit Our Birmingham Studio
            </h3>
            <p className="text-foreground/60 text-sm font-light mb-8">
              110 Hagley Road West, Birmingham, B67 5EZ
            </p>
            <a 
              href="https://maps.google.com/?q=110+Hagley+Road+West,+Birmingham,+B67+5EZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium bg-rich-black text-white px-6 py-3 rounded hover:bg-luxury-gold transition-colors duration-500 shadow-md"
            >
              Open in Google Maps
            </a>
          </FadeInSection>

          <FadeInSection>
            <div className="h-[500px] w-full relative rounded-2xl overflow-hidden shadow-2xl border border-rich-black/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.490802717904!2d-2.007604588265008!3d52.47355157193233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bb073f44c9b9%3A110+Hagley+Road+West%2C+Birmingham%2C+B67+5EZ!5e0!3m2!1sen!2suk!4v1715349999999!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-rich-black text-white text-center">
        <div className="container-luxury">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-display mb-10 text-dual-tone">Experience Architecture <br /> <span className="italic">Elevated</span></h2>
            <a 
              href="mailto:sales@hssdb.co.uk"  
              className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold border-b border-luxury-gold/30 pb-2 hover:border-luxury-gold transition-all duration-500"
            >
              Request a Portfolio PDF
            </a>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
