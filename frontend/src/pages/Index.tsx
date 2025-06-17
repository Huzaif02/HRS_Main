
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import AnimationObserver from "../components/AnimationObserver";

const Index = () => {
  // Update page title
  useEffect(() => {
    document.title = "HRS SOLAR - Solar Installation Services in India";
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <AnimationObserver />
    </div>
  );
};

export default Index;
