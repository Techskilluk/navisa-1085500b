import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock } from "lucide-react";

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
            <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2">
              <Mail className="w-5 h-5 text-black" />
              contact@navisa.com
            </Button>
            <div className="flex flex-col gap-4">
              <Button className="px-8 py-6 text-lg glass-effect hover:bg-white/10 flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
                <div className="flex flex-col">
                  <span>+447816 247864</span>
                  <span>+234 901 546 6402</span>
                </div>
              </Button>
              <Button className="px-8 py-6 text-lg glass-effect hover:bg-white/10 flex items-center gap-2">
                <Clock className="w-5 h-5 text-white" />
                Monday–Friday, 9 AM–5 PM (GMT)
              </Button>
            </div>
            <Button className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 flex items-center gap-2">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;