import PageBanner from "@/components/ui/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import LuxuryButton from "@/components/ui/LuxuryButton";
import FadeInSection from "@/components/ui/FadeInSection";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Services | XI DESIGN BUILD",
  description: "Explore our comprehensive architectural services, from luxury residential design and home extensions to commercial architecture and planning expertise.",
};

const services = [
  {
    title: "Home Extensions",
    description: "Expand your living space with seamless architectural integrations. We specialize in creating extensions that feel like a natural evolution of your home's original character while introducing modern functionality.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Bespoke design integration", "Increased property value", "Optimized spatial flow", "Energy-efficient solutions"]
  },
  {
    title: "Loft Conversions",
    description: "Unlock the hidden potential of your roof space. Our loft conversions are designed to maximize natural light and create sophisticated retreats, whether it's a new master suite or a quiet home office.",
    image: "https://images.unsplash.com/photo-1600585152223-998175727efc?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Maximised internal volume", "Bespoke storage solutions", "Innovative skylight design", "Structural integrity focus"]
  },
  {
    title: "Residential Design",
    description: "The pinnacle of bespoke living. We create luxury private residences that are a pure reflection of your vision, combined with our technical expertise and artistic direction.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Unique architectural identity", "Luxury material palettes", "Indoor-outdoor connectivity", "Smart home integration"]
  },
  {
    title: "Commercial Architecture",
    description: "Designing environments that foster innovation and productivity. Our commercial projects balance brand identity with ergonomic excellence and long-term sustainability.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    benefits: ["Brand-centric design", "Agile workspace planning", "Technical infrastructure support", "Sustainable build metrics"]
  },
  {
    title: "Planning Permission",
    description: "Navigating the complexities of local planning authorities with expert precision. We have an industry-leading success rate in securing permissions for ambitious and sensitive sites.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Expert policy analysis", "Heritage site navigation", "Pre-application consultancy", "Strategic appeal handling"]
  },
  {
    title: "Building Regulations",
    description: "Technical drawings and specifications that exceed compliance standards. We ensure your project is built to the highest levels of safety, efficiency, and structural performance.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Detailed technical packages", "Fire safety compliance", "Thermal performance metrics", "Structural coordination"]
  },
  {
    title: "Design & Build",
    description: "A single point of responsibility for your entire project. Our integrated design and build service provides a seamless transition from the first sketch to the final brick.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Streamlined communication", "Budget-conscious delivery", "Timeframe optimization", "Quality control management"]
  },
  {
    title: "CGI Visualisation",
    description: "Experience your project before it exists. Our hyper-realistic CGI renders allow you to visualize every detail, light-play, and material finish with cinematic clarity.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Photorealistic rendering", "360-degree walkthroughs", "Lighting simulation", "Marketing-ready visuals"]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner 
        title="Bespoke Architectural Solutions" 
        subtitle="Our Expertise"
        image="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-32">
        <div className="container-luxury">
          <SectionHeading
            subtitle="The Studio Offering"
            subtitleColor="text-luxury-gold"
            title="Comprehensive Services <br /> <span class='italic'>Defined by Excellence</span>"
            description="From initial feasibility studies to final delivery, XI Design & Build provides a holistic approach to architecture and construction."
            align="center"
            className="mx-auto"
          />


          <div className="mt-32 space-y-32 md:space-y-48">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <FadeInSection direction={index % 2 === 0 ? 'left' : 'right'}>
                    <div className="relative aspect-[16/10] overflow-hidden group">
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 opacity-20 bg-luxury-gold" />
                    </div>
                  </FadeInSection>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <FadeInSection direction={index % 2 === 0 ? 'right' : 'left'}>
                    <span className="font-display text-4xl opacity-20 block mb-4 text-luxury-gold">0{index + 1}</span>
                    <h3 className="text-2xl md:text-4xl font-display mb-8 text-dual-tone">{service.title}</h3>

                    <p className="text-foreground/60 font-light leading-relaxed mb-10 text-base">
                      {service.description}
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3 text-sm text-foreground/70">
                          <div className="w-5 h-5 rounded-full border border-luxury-gold/30 flex items-center justify-center">
                            <Check className="w-3 h-3 text-luxury-gold" />
                          </div>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <LuxuryButton href="/contact" variant="green">Book Consultation</LuxuryButton>
                  </FadeInSection>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-spacing bg-warm-ivory">
        <div className="container-luxury text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-display mb-8 text-dual-tone">Ready to define <span className="italic">your</span> space?</h2>

            <p className="text-foreground/50 max-w-2xl mx-auto mb-12">
              Our experts are ready to guide you through every stage of your project's lifecycle.
            </p>
            <LuxuryButton href="/contact" size="lg" variant="green">Start Your Project</LuxuryButton>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
