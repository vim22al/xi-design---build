import PageBanner from "@/components/ui/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import FadeInSection from "@/components/ui/FadeInSection";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | XI DESIGN BUILD",
  description: "Let’s Discuss Your Vision. Reach out to our London-based architectural studio to start your next luxury design and build project.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex items-start gap-8 group">
                      <div className="w-14 h-14 flex items-center justify-center border border-rich-black/5 group-hover:border-luxury-gold transition-colors duration-500">
                        <Phone className="w-5 h-5 text-luxury-gold" />
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest text-foreground/40 mb-3 font-medium">Call Us</h4>
                        <p className="text-lg font-display">+44 (0) 20 1234 5678</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-8 group">
                      <div className="w-14 h-14 flex items-center justify-center border border-rich-black/5 group-hover:border-luxury-gold transition-colors duration-500">
                        <Mail className="w-5 h-5 text-luxury-gold" />
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest text-foreground/40 mb-3 font-medium">Email Us</h4>
                        <p className="text-lg font-display">info@xidesign.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="pt-12 border-t border-rich-black/5">
                    <h4 className="text-[10px] uppercase tracking-widest text-foreground/40 mb-6 font-medium">Office Hours</h4>
                    <ul className="space-y-3 text-sm font-light">
                      <li className="flex justify-between"><span>Monday — Friday</span> <span>09:00 - 18:00</span></li>
                      <li className="flex justify-between"><span>Saturday</span> <span>By Appointment Only</span></li>
                      <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                    </ul>
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
                  <h3 className="text-2xl font-display mb-12 italic text-dual-tone">Start Your Project</h3>
                  <ContactForm />
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.490802717904!2d-2.007604588265008!3d52.47355157193233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bb073f44c9b9%3A0xc3f12b6b553e18!2s110%20Hagley%20Rd%20W%2C%20Oldbury%20B67%205EZ%2C%20UK!5e0!3m2!1sen!2sin!4v1715349999999!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="opacity-60"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white" />
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-rich-black text-white text-center">
        <div className="container-luxury">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-display mb-10 text-dual-tone">Experience Architecture <br /> <span className="italic">Elevated</span></h2>
            <a 
              href="mailto:info@xidesign.com" 
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
