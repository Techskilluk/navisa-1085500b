import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src="/navisa-logo.svg" alt="Navisa" className="h-8 w-auto" />
          </Link>
          <span className="text-2xl font-bold text-white">Navisa</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
          <Link to="/pathways" className="text-white/80 hover:text-white transition-colors">Pathways</Link>
          <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors">How it works</Link>
          <Link to="/eligibility" className="text-white/80 hover:text-white transition-colors">Check your eligibility</Link>
          {!user && (
            <Link to="/signin">
              <Button className="bg-white text-black hover:bg-white/90 transition-colors">
                Sign in
                <LogIn className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;