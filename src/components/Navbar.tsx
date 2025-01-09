import { Button } from "@/components/ui/button";
import { LogIn, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      console.log("Attempting to sign out...");
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account.",
      });
      console.log("Sign out successful");
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: "There was a problem signing you out. Please try again.",
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src="/navisa-logo.svg" alt="Navisa" className="h-6 sm:h-8 w-auto" />
          </Link>
          <span className="text-xl sm:text-2xl font-bold text-white">Navisa</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-background/95 z-40" onClick={toggleMenu}>
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link to="/" className="text-xl text-white hover:text-white/80 transition-colors">Home</Link>
              <Link to="/pathways" className="text-xl text-white hover:text-white/80 transition-colors">Pathways</Link>
              <Link to="/how-it-works" className="text-xl text-white hover:text-white/80 transition-colors">How it works</Link>
              <Link to="/eligibility" className="text-xl text-white hover:text-white/80 transition-colors">Check your eligibility</Link>
              {user ? (
                <Button 
                  onClick={handleSignOut}
                  variant="outline"
                  className="w-48 h-12 bg-white text-black hover:bg-white/90 transition-colors text-lg"
                >
                  Sign out
                  <LogOut className="w-5 h-5 ml-2" />
                </Button>
              ) : (
                <Link to="/signin" className="w-48">
                  <Button className="w-full h-12 bg-white text-black hover:bg-white/90 transition-colors text-lg">
                    Sign in
                    <LogIn className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
          <Link to="/pathways" className="text-white/80 hover:text-white transition-colors">Pathways</Link>
          <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors">How it works</Link>
          <Link to="/eligibility" className="text-white/80 hover:text-white transition-colors">Check your eligibility</Link>
          {user ? (
            <Button 
              onClick={handleSignOut}
              variant="outline"
              className="bg-white text-black hover:bg-white/90 transition-colors"
            >
              Sign out
              <LogOut className="w-4 h-4 ml-2" />
            </Button>
          ) : (
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