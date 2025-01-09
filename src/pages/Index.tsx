import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import VisaProcessBanner from "@/components/VisaProcessBanner";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServiceCards />
      <VisaProcessBanner />
      <Features />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;