import { Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 lg:py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/navisa-logo.svg" alt="Navisa" className="h-6 sm:h-8 w-auto" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Navisa</h3>
            </div>
            <p className="text-sm sm:text-base text-white/60">
              Empowering Global Talent, One Opportunity at a Time.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10" asChild>
                <a href="https://instagram.com/navisa" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10" asChild>
                <a href="https://twitter.com/navisa" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10" asChild>
                <a href="https://linkedin.com/company/navisa" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm sm:text-base text-white/60">Email: contact@navisa.co</li>
              <li className="text-sm sm:text-base text-white/60">Phone: +447816247864</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <p className="text-center text-sm sm:text-base text-white/60">
            © 2025 NAVISA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;