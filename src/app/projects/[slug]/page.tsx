import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { projectBySlugQuery, projectSlugsQuery } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import FadeInSection from '@/components/ui/FadeInSection';
import { MapPin, Tag, Calendar, Ruler } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await client.fetch(projectSlugsQuery);
  return slugs.map((project: any) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await client.fetch(projectBySlugQuery, { slug });

  if (!project) {
    return {
      title: 'Project Not Found | XI DESIGN BUILD',
    };
  }

  return {
    title: `${project.title} | Projects | XI DESIGN BUILD`,
    description: project.excerpt || `Explore ${project.title}, a luxury architectural project by XI Design & Build located in ${project.location}.`,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  const project = await client.fetch(projectBySlugQuery, { slug });
  const allProjectSlugs = await client.fetch(projectSlugsQuery);

  if (!project) {
    notFound();
  }

  // Find next project
  const currentIndex = allProjectSlugs.findIndex((p: any) => p.slug === slug);
  const nextProject = allProjectSlugs[(currentIndex + 1) % allProjectSlugs.length];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-rich-black/40" />
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="container-luxury">
            <FadeInSection>
              <span className="text-luxury-gold text-xs md:text-sm uppercase tracking-[0.3em] mb-4 block">
                {project.category?.title || 'Architecture'}
              </span>
              <h1 className="text-3xl md:text-6xl font-display mb-6 max-w-4xl leading-tight text-dual-tone">
                {project.title}
              </h1>
              <div className="flex items-center text-white/80 gap-6">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-luxury-gold" />
                  <span className="text-sm tracking-wide">{project.location}</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-spacing">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left side: Description */}
            <div className="lg:col-span-8">
              <FadeInSection>
                <h2 className="text-xl font-display text-dual-tone mb-8">Project Vision</h2>
                <div className="prose prose-lg prose-stone max-w-none text-rich-black/70 leading-relaxed">
                  <PortableText value={project.description} />
                </div>
              </FadeInSection>
            </div>

            {/* Right side: Details Panel */}
            <div className="lg:col-span-4">
              <FadeInSection delay={0.2}>
                <div className="bg-ivory p-10 border border-luxury-gold/20 sticky top-32">
                  <h3 className="text-lg font-display text-dual-tone mb-8 pb-4 border-b border-luxury-gold/10">
                    Project Details
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2 text-rich-black/50">
                        <Tag size={16} />
                        <span className="text-xs uppercase tracking-wider font-semibold">Category</span>
                      </div>
                      <span className="text-sm font-medium text-rich-black">{project.category?.title}</span>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2 text-rich-black/50">
                        <MapPin size={16} />
                        <span className="text-xs uppercase tracking-wider font-semibold">Location</span>
                      </div>
                      <span className="text-sm font-medium text-rich-black">{project.location}</span>
                    </div>

                    {project.publishedAt && (
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2 text-rich-black/50">
                          <Calendar size={16} />
                          <span className="text-xs uppercase tracking-wider font-semibold">Completed</span>
                        </div>
                        <span className="text-sm font-medium text-rich-black">
                          {new Date(project.publishedAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
                        </span>
                      </div>
                    )}

                    {project.details?.map((detail: any, index: number) => (
                      <div key={index} className="flex justify-between items-start pt-2">
                        <div className="flex items-center gap-2 text-rich-black/50">
                          <span className="text-xs uppercase tracking-wider font-semibold">{detail.label}</span>
                        </div>
                        <span className="text-sm font-medium text-rich-black text-right">{detail.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12">
                    <LuxuryButton href="/contact" className="w-full justify-center">
                      Enquire About This Project
                    </LuxuryButton>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="section-spacing bg-ivory/30">
          <div className="container-luxury">
            <FadeInSection>
              <SectionHeading
                subtitle="Visual Showcase"
                title="Interior & Exterior <span class='italic text-luxury-gold'>Perspectives</span>"
                align="center"
              />
            </FadeInSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {project.gallery.map((img: any, idx: number) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <div className="relative aspect-[4/3] overflow-hidden group">
                    <Image
                      src={img.url}
                      alt={`${project.title} Gallery ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation Footer */}
      <section className="py-20 border-t border-luxury-gold/10">
        <div className="container-luxury flex justify-between items-center">
          <LuxuryButton href="/projects" variant="outline">
            Back to Portfolio
          </LuxuryButton>
          {nextProject && (
            <LuxuryButton href={`/projects/${nextProject.slug}`}>
              Next: {nextProject.title}
            </LuxuryButton>
          )}
        </div>
      </section>
    </main>
  );
}
