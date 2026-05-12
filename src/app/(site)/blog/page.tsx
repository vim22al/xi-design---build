import PageBanner from "@/components/ui/PageBanner";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogGrid from "@/components/blog/BlogGrid";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allPostsQuery, allCategoriesQuery, featuredPostQuery, latestPostsQuery } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Journal | XI DESIGN BUILD",
  description: "Insights into the world of luxury architecture, modern design trends, and technical innovation from the XI Design & Build studio.",
};

export default async function BlogPage() {
  const [posts, categories, featuredPost, recentPosts] = await Promise.all([
    client.fetch(allPostsQuery),
    client.fetch(allCategoriesQuery),
    client.fetch(featuredPostQuery),
    client.fetch(latestPostsQuery),
  ]);

  // Remove the featured post from the grid listing to avoid duplication
  const gridPosts = posts.filter((p: any) => p._id !== featuredPost?._id);

  return (
    <main className="min-h-screen bg-white">
      <PageBanner 
        title="The Journal" 
        subtitle="Insights & Musings"
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="section-spacing">
        <div className="container-luxury">
          {/* Hero Featured Article */}
          {featuredPost && (
            <FeaturedPost post={featuredPost} />
          )}

          {/* Main Content Grid with Sidebar */}
          <BlogGrid 
            initialPosts={gridPosts} 
            categories={categories} 
            recentPosts={recentPosts} 
          />
        </div>
      </section>
    </main>
  );
}
