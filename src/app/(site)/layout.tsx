import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import AnimationProvider from "@/providers/AnimationProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import PageTransition from "@/components/ui/PageTransition";
import CustomCursor from "@/components/ui/CustomCursor";
import "./site.css";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <SmoothScrollProvider>
        <AnimationProvider>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </AnimationProvider>
      </SmoothScrollProvider>
    </>
  );
}
