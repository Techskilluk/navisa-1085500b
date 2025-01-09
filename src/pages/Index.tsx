import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import VisaProcessBanner from "@/components/VisaProcessBanner";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CommunitySection from "@/components/CommunitySection";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Separator className="bg-white/10" />
      <ServiceCards />
      <Separator className="bg-white/10" />
      <VisaProcessBanner />
      <Separator className="bg-white/10" />
      <Features />
      <Separator className="bg-white/10" />
      <Testimonials />
      <Separator className="bg-white/10" />
      <CommunitySection />
      <Separator className="bg-white/10" />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;