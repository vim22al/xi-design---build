import PageBanner from "@/components/ui/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import LuxuryButton from "@/components/ui/LuxuryButton";
import FadeInSection from "@/components/ui/FadeInSection";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Architecture | XI DESIGN BUILD",
  description: "Creative Architecture with Technical Precision. Discover our studio's philosophy, approach, and the team behind our bespoke architectural solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner 
        title="Creative Architecture with Technical Precision" 
        subtitle="Our Essence"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Studio Introduction */}
      <section className="section-spacing">
        <div className="container-luxury">
          <div className="max-w-4xl">
            <FadeInSection>
              <span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] mb-8 block font-medium">Studio Introduction</span>
              <h2 className="text-3xl md:text-5xl font-display leading-[1.1] mb-12 text-dual-tone">
                XI Design & Build is a multi-disciplinary architectural studio focused on <span className="italic">extraordinary</span> living environments.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-foreground/60 font-light leading-relaxed text-base">
                <p>
                  Founded in London, our practice has evolved into a leading voice in high-end residential and commercial architecture. We believe that every building has a soul, and our mission is to reveal it through meticulous planning and artistic vision.
                </p>
                <p>
                  From heritage restorations to cutting-edge modernists structures, we approach every project with the same level of intensity and dedication to quality.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Split Layout */}
      <section className="section-spacing bg-warm-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <FadeInSection direction="left">
              <SectionHeading
                subtitle="Philosophy"
                subtitleColor="text-luxury-gold"
                title="The Art of <br /> <span class='italic'>Purposeful</span> Design"
                description="Our philosophy is rooted in the belief that architecture should be as functional as it is beautiful. We don't just design buildings; we design the background of your life's most important moments."
              />

              <p className="text-foreground/50 font-light leading-relaxed mb-10">
                We prioritize natural light, honest materials, and spatial harmony. Every line we draw is a commitment to creating an environment that elevates the human experience.
              </p>
              <LuxuryButton href="/projects" variant="outline">View Our Works</LuxuryButton>
            </FadeInSection>
            
            <FadeInSection direction="right">
              <div className="relative aspect-[4/5] overflow-hidden group">
                <Image 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                  alt="Architecture Philosophy" 
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Design Approach - Reversed Split */}
      <section className="section-spacing">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <FadeInSection direction="left" className="order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden group">
                <Image 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Design Approach" 
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </FadeInSection>

            <FadeInSection direction="right" className="order-1 lg:order-2">
              <SectionHeading
                subtitle="Design Approach"
                subtitleColor="text-luxury-gold"
                title="A Journey from <br /> <span class='italic'>Concept</span> to Reality"
                description="We follow a rigorous design process that integrates technical precision with creative flair. Our approach is collaborative, transparent, and results-driven."
              />

              <ul className="space-y-6">
                {[
                  { title: "Strategic Discovery", desc: "Deep diving into your vision and requirements." },
                  { title: "Architectural Innovation", desc: "Crafting unique concepts that challenge the norm." },
                  { title: "Technical Excellence", desc: "Ensuring every detail is engineered for perfection." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-6">
                    <span className="text-luxury-gold font-display text-2xl">0{i+1}.</span>
                    <div>
                      <h4 className="text-lg font-display mb-1 text-dual-tone">{item.title}</h4>
                      <p className="text-[13px] text-foreground/50">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Experience / Stats Section */}
      <section className="section-spacing bg-rich-black text-white">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Years Experience", value: "15+" },
              { label: "Completed Projects", value: "550+" },
              { label: "Design Awards", value: "18" },
              { label: "Expert Team", value: "25" }
            ].map((stat, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <h3 className="text-3xl md:text-5xl font-display text-luxury-gold mb-4">{stat.value}</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-40">{stat.label}</p>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose XI Design & Build */}
      <section className="section-spacing bg-warm-ivory">
        <div className="container-luxury">
          <SectionHeading
            subtitle="The XI Advantage"
            subtitleColor="text-luxury-gold"
            title="Why Partner <span class='italic'>With Us</span>"
            align="center"
            className="mx-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {[
              { title: "Planning Expertise", desc: "Unmatched success rate in securing permissions for complex sites." },
              { title: "Bespoke Service", desc: "Tailored architectural solutions that reflect your individual identity." },
              { title: "Technical Rigor", desc: "Advanced BIM and construction documentation for seamless delivery." },
              { title: "Luxury Aesthetic", desc: "A commitment to a refined, high-end design language." },
              { title: "Project Management", desc: "End-to-end oversight ensuring time and budget compliance." },
              { title: "Sustainability", desc: "Eco-conscious design principles integrated into every project." }
            ].map((benefit, i) => (
              <FadeInSection key={i} delay={i * 0.1} className="bg-white p-10 border border-rich-black/5 hover:border-luxury-gold/30 transition-all duration-500">
                <h4 className="text-lg font-display mb-4 text-dual-tone">{benefit.title}</h4>
                <p className="text-[13px] text-foreground/50 leading-relaxed">{benefit.desc}</p>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing bg-white">
        <div className="container-luxury">
          <SectionHeading
            subtitle="Our Collective"
            subtitleColor="text-luxury-gold"
            title="The Minds <br /> <span class='italic'>Behind the Vision</span>"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              { name: "Julian Thorne", role: "Principal Architect", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
              { name: "Sophia Vane", role: "Design Director", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" },
              { name: "Aiko Tanaka", role: "Technical Lead", img: "/images/aiko_tanaka.png" },
            ].map((member, i) => (
              <FadeInSection key={i} delay={i * 0.1} className="group">
                <div className="aspect-[3/4] overflow-hidden relative mb-6">
                  <Image src={member.img} alt={member.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-rich-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h4 className="text-xl font-display text-dual-tone">{member.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-luxury-gold mt-2 font-medium">{member.role}</p>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Partner Section */}
      <section className="section-spacing bg-warm-ivory overflow-hidden">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Left: Luxury construction image */}
            <FadeInSection direction="left">
              <div className="relative">
                <div className="relative aspect-[4/5] md:aspect-square overflow-hidden group border border-luxury-gold/10">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                    alt="HSS Design & Build — Precision Construction"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/50 via-transparent to-transparent" />
                </div>
                {/* Floating accent tag */}
                <div className="absolute -bottom-6 -left-6 bg-rich-black text-luxury-gold px-6 py-4 hidden md:block">
                  <p className="text-[9px] uppercase tracking-[0.35em] font-medium">Trusted Build Partner</p>
                  <p className="text-lg font-display mt-1">HSS Design &amp; Build</p>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-luxury-gold/30 hidden md:block" />
              </div>
            </FadeInSection>

            {/* Right: Partnership content */}
            <FadeInSection direction="right">
              <SectionHeading
                subtitle="Construction Partnership"
                subtitleColor="text-luxury-gold"
                title="Architecture &amp; Construction <span class='italic'>Working Seamlessly</span> Together"
                description="From the initial sketch to the final handover, our collaboration with HSS Design &amp; Build ensures that every architectural vision is realised with uncompromising craftsmanship and precision delivery."
              />

              <div className="space-y-6 mb-12">
                {[
                  { step: '01', title: 'Architectural Planning', desc: 'XI Design & Build leads concept development, spatial planning and local authority approvals.' },
                  { step: '02', title: 'Technical Design & Documentation', desc: 'Detailed engineering drawings, specifications and material schedules prepared to construction standard.' },
                  { step: '03', title: 'Build Execution', desc: 'HSS Design & Build manage site operations, trades coordination and quality assurance on-site.' },
                  { step: '04', title: 'Project Delivery', desc: 'A seamless client handover — on time, on budget, and built exactly to your vision.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 group">
                    <span className="text-luxury-gold/40 font-display text-xl shrink-0 group-hover:text-luxury-gold transition-colors duration-500">{item.step}</span>
                    <div>
                      <h4 className="text-sm font-display text-dual-tone mb-1">{item.title}</h4>
                      <p className="text-[13px] text-foreground/50 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://hssdb.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-deep-green text-white uppercase tracking-[0.25em] text-[10px] px-10 py-5 font-medium border border-transparent hover:border-luxury-gold/50 hover:shadow-lg hover:shadow-luxury-gold/10 transition-all duration-700 group"
              >
                Visit HSS Design &amp; Build
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
              </a>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  );
}
