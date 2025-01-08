import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-navisa-dark/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 hover-lift">
          <div className="bg-white/10 p-2 rounded-lg" aria-label="Navisa Logo">
            <img src="/navisa-logo.svg" alt="Navisa" className="h-8 w-auto" />
          </div>
          <span className="text-2xl font-bold text-white">Navisa</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Pathways</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">How it works</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Check your eligibility</a>
          <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
            Sign in
            <LogIn className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;