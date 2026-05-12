import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import AboutPreview from "@/components/home/AboutPreview";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectsMasonry from "@/components/home/ProjectsMasonry";
import Testimonials from "@/components/home/Testimonials";
import PartnerSection from "@/components/home/PartnerSection";
import ContactCTA from "@/components/home/ContactCTA";
import { client } from "@/sanity/lib/client";
import { featuredProjectsQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const featuredProjects = await client.fetch(featuredProjectsQuery);

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Trust Section - Service Grid */}
      <TrustSection />

      {/* About Preview Section */}
      <AboutPreview />

      {/* Projects Masonry Gallery */}
      <ProjectsMasonry projects={featuredProjects} />

      {/* Process Section - Timeline */}
      <ProcessSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Construction Partner Section */}
      <PartnerSection />

      {/* Contact CTA Section */}
      <ContactCTA />
    </main>
  );
}
