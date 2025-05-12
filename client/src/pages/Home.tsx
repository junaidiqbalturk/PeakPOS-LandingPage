import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import InteractiveDemo from "@/components/InteractiveDemo";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import NavigationDots from "@/components/NavigationDots";
import { initScrollAnimations, clearScrollTriggers } from "@/lib/animations";

const Home = () => {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
    
    return () => {
      // Clean up animations when component unmounts
      clearScrollTriggers();
    };
  }, []);

  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <InteractiveDemo />
      <Benefits />
      <Testimonials />
      <Pricing />
      <CtaSection />
      <ContactSection />
      <Footer />
      <NavigationDots />
    </div>
  );
};

export default Home;
