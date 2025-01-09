import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe } from "lucide-react";

const Download = () => {
  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get Started Today
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Empower your global journey with Navisa.co. Let's begin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-6 text-lg bg-[#F2FF44] text-black hover:bg-[#F2FF44]/90 flex items-center gap-2">
              <Mail className="w-5 h-5 text-black" />
              info@navisa.co
            </Button>
            <Button className="px-8 py-6 text-lg glass-effect hover:bg-white/10 flex items-center gap-2">
              <Phone className="w-5 h-5 text-white" />
              +1 (800) 123-4567
            </Button>
            <Button className="px-8 py-6 text-lg glass-effect hover:bg-white/10 flex items-center gap-2">
              <Globe className="w-5 h-5 text-white" />
              Visit Website
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;