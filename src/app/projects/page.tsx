import PageBanner from "@/components/ui/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGallery from "@/components/projects/ProjectGallery";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allProjectsQuery, allCategoriesQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Portfolio | XI DESIGN BUILD",
  description: "Explore our portfolio of exceptional residential and commercial architectural projects, crafted with timeless design and meticulous detail.",
};

export default async function ProjectsPage() {
  const projects = await client.fetch(allProjectsQuery);
  const categoriesData = await client.fetch(allCategoriesQuery);
  
  const categories = ['All Projects', ...categoriesData.map((cat: any) => cat.title)];

  return (
    <main className="min-h-screen bg-white">
      <PageBanner 
        title="Architecture for the Discerning" 
        subtitle="Selected Works"
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="section-spacing">
        <div className="container-luxury">
          <SectionHeading
            subtitle="Our Portfolio"
            title="Exceptional Projects, <br /> <span class='italic text-luxury-gold'>Timeless Design</span>"
            description="Our body of work spans a diverse range of scales and typologies, unified by a commitment to architectural excellence and human-centric spaces."
            align="center"
            className="mx-auto"
          />
          
          <div className="mt-20">
            <ProjectGallery projects={projects} categories={categories} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-rich-black text-white text-center">
        <div className="container-luxury">
          <h2 className="text-3xl md:text-5xl font-display mb-8 text-dual-tone">Have a vision in mind?</h2>
          <p className="text-white/40 max-w-xl mx-auto mb-12">
            We collaborate with ambitious clients to create spaces that inspire. Let's discuss how we can bring your project to life.
          </p>
          <LuxuryButton href="/contact" variant="outline" size="lg">
            Start Your Journey
          </LuxuryButton>
        </div>
      </section>
    </main>
  );
}
