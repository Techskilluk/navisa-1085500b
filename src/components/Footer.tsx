import { Mail, Phone, Instagram, Twitter, Linkedin, TikTok } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Contact Section */}
      <div className="py-24 px-4 bg-gradient-to-br from-accent/10 via-background to-background relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-white">Let's Get Started</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Have questions or ready to begin your global career journey? Our team is here to help!
            </p>
          </div>
          
          <div className="max-w-xl mx-auto space-y-6 text-center">
            <div className="glass-effect p-8 rounded-2xl space-y-6">
              <div className="flex items-center justify-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:contact@navisa.com" className="hover:text-accent transition-colors">
                  contact@navisa.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-accent" />
                <div className="space-x-2">
                  <a href="tel:+447816247864" className="hover:text-accent transition-colors">+447816 247864</a>
                  <span>|</span>
                  <a href="tel:+2349015466402" className="hover:text-accent transition-colors">+234 901 546 6402</a>
                </div>
              </div>
              
              <div className="text-white/80">
                Office Hours: Monday–Friday, 9 AM–5 PM (GMT)
              </div>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="hover:bg-secondary/90 hover-lift"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-20 px-4 bg-background relative">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Logo and Tagline */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src="/navisa-logo.svg" alt="Navisa" className="h-8 w-auto" />
              <h3 className="text-2xl font-bold text-white">Navisa</h3>
            </div>
            <p className="text-white/60 max-w-xl mx-auto">
              Empowering Global Talent, One Opportunity at a Time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              "About Us",
              "Services",
              "Success Stories",
              "Blog",
              "Contact Us"
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-4 mb-12">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: TikTok, href: "#" }
            ].map(({ Icon, href }, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="hover:bg-white/10"
                asChild
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="w-5 h-5 text-white" />
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-white/60">
            © 2025 NAVISA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;