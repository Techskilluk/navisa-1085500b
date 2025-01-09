import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/navisa-logo.svg" alt="Navisa" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-white">Navisa</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Pathways</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">How it works</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Check your eligibility</a>
          {user ? (
            <Button 
              onClick={() => signOut()} 
              className="bg-white text-black hover:bg-white/90"
            >
              Sign out
              <LogOut className="w-4 h-4 ml-2 text-black" />
            </Button>
          ) : (
            <Link to="/signin">
              <Button className="bg-white text-black hover:bg-white/90">
                Sign in
                <LogIn className="w-4 h-4 ml-2 text-black" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;