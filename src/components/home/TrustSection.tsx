'use client';

import React from 'react';
import { 
  Home, 
  Building2, 
  FileCheck, 
  ShieldCheck, 
  Hammer, 
  LayoutDashboard 
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';

const services = [
  {
    title: 'Residential Architecture',
    description: 'Bespoke home designs that blend functionality with high-end architectural aesthetics.',
    icon: Home,
    number: '01'
  },
  {
    title: 'Commercial Design',
    description: 'Innovative workspaces and commercial environments designed for growth and impact.',
    icon: Building2,
    number: '02'
  },
  {
    title: 'Planning Permission',
    description: 'Expert guidance through complex planning processes with a high success rate.',
    icon: FileCheck,
    number: '03'
  },
  {
    title: 'Building Regulations',
    description: 'Detailed technical drawings and specifications ensuring full compliance and safety.',
    icon: ShieldCheck,
    number: '04'
  },
  {
    title: 'Design & Build',
    description: 'A seamless, integrated approach from initial concept to final construction delivery.',
    icon: Hammer,
    number: '05'
  },
  {
    title: 'Project Management',
    description: 'End-to-end management ensuring your project is on time, on budget, and on vision.',
    icon: LayoutDashboard,
    number: '06'
  }
];

export default function TrustSection() {
  return (
    <section className="section-spacing bg-warm-ivory">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Our Expertise"
          subtitleColor="text-luxury-gold"
          title="Full-Service Architectural <br /> <span className='italic'>Excellence</span>"
          description="We provide a comprehensive range of architectural services, ensuring every stage of your project is handled with expert precision and creative vision."
          align="center"
          className="mx-auto"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              className="bg-white border-rich-black/5"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
